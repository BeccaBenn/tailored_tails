from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Define your machine learning model and its functionality here
# For demonstration purposes, let's define a simple function to generate a sentence
def generate_sentence(subject, verb, object):
    sentence = f"{subject} {verb} {object}."
    return sentence

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_sentence', methods=['POST'])
def generate_sentence_route():
    # Retrieve input data from the request
    data = request.get_json()
    subject = data.get('subject')
    verb = data.get('verb')
    object = data.get('object')

    # Generate sentence using your machine learning model
    sentence = generate_sentence(subject, verb, object)

    # Return the generated sentence
    return jsonify({"sentence": sentence})

if __name__ == '__main__':
    app.run(debug=True)
