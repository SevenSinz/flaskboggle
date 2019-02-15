from flask import Flask, render_template, request, session, redirect
# from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle

app = Flask(__name__)

app.config['SECRET_KEY'] = 'oh-so-secret'

app.secret_key = "secret_key"
# debug = DebugToolbarExtension(app)

boggle_game = Boggle()

@app.route('/board')
def load_board():
    board = boggle_game.make_board()
    session["board"] = board
    return   render_template('board.html', board = board)
    