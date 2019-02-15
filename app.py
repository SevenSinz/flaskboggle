from flask import Flask, render_template, request, session, redirect, jsonify
# from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle

app = Flask(__name__)

app.config['SECRET_KEY'] = 'oh-so-secret'

app.secret_key = "secret_key"
# debug = DebugToolbarExtension(app)

boggle_game = Boggle()
board = boggle_game.make_board()


@app.route('/')
def load_board():
    session["board"] = board
    return render_template('board.html', board = board)


@app.route('/wordlist', methods=['POST'])
def verify_word_in_board():
    
    return jsonify({'result': "we made it"})