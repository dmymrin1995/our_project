from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "hello world"

@app.route('/db')
def db_remote():
    return "bye bitch"

if __name__ == "__main__":
    app.run()