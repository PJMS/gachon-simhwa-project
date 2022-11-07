from flask import Flask, render_template

app = Flask(__name__,
            static_url_path='',
            static_folder='dist/portfolio',
            template_folder='dist/portfolio')


@app.route('/')
def indexhtml():
    return render_template('index.html')


@app.route('/hello')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run(port=8080)
