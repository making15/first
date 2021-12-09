from flask import Flask, render_template, request, redirect, url_for, Response, jsonify


import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import db
from settings import *

import os
THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
my_file = os.path.join(THIS_FOLDER, ('serviceAccountKey.json')


cred = credentials.Certificate(my_file)
firebase_admin.initialize_app(cred, S_KEY)
firebase_db = firestore.client()
app = Flask(__name__, template_folder='templates')


ref = db.reference('list') #db 위치 지정



@app.route('/test', methods=['GET'])
def test_get():
   test = ref.get()

   return jsonify(test)

@app.route('/detail/show', methods=['GET'])
def show_detail():
    id = request.args.get('id')
    print(id)
    return jsonify(id)

@app.route('/')
def home():
        return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/classlist')
def classlist():
    return render_template('classList.html')

@app.route('/detail')
def detail():
    return render_template('detail.html')

@app.route('/guestbook')
def guestbook():
    return render_template('guestBook.html')



@app.errorhandler(404) 
def page_not_found(error):
    return render_template('404notfound.html')



if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
