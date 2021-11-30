from flask import Flask, render_template, request, redirect

app = Flask(__name__, template_folder='templates')



@app.route('/')
def home():
        return render_template("index.html")

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
