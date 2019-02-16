from flask import Flask, render_template, request, session, redirect, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle

app = Flask(__name__)

app.config['SECRET_KEY'] = 'oh-so-secret'

app.secret_key = "secret_key"
debug = DebugToolbarExtension(app)

boggle_game = Boggle()

@app.route('/')
def load_board():
    session["board"] = boggle_game.make_board()
    session["score"] = 0
    session["gamenum"]=0
    return render_template('board.html', board = session["board"])


@app.route('/wordlist', methods=['POST'])
def verify_word_in_board():
    word = request.form['word']
    game_response = check_word(word)
    session["gamenum"] = session["gamenum"] + 1
    # print("game_response", game_response)
    if game_response == "ok":
        session["score"] = session["score"] + len(word)
    return jsonify({'result': game_response,'score': session['score']})

def check_word(word):  
    return boggle_game.check_valid_word(session["board"], word)


@app.route('/', methods=['POST'])
def end_game():
    session["gamenum"]+=1
    session["highest-score"] = max(session.get("highest-score", 0), session["score"])
     
    
    return render_template('board.html', board = session["board"])
