# Main imports
import numpy as np
from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = pickle.load(open('model.pkl','rb'))


@app.route("/")
def hello():
    name = request.args.get("name", "World")
    return "Hello"

@app.route('/predict',methods=['POST'])
def predict():
    # Get the data from the POST request.
    data = request.get_json(force=True)
    features = np.array(data['data']).reshape(1,-1)
    # Make prediction using model loaded from disk as per the data.
    prediction = model.predict(features)
    # Take the first value of prediction
    output = prediction[0]
    return str(output)

if __name__ == '__main__':
    app.run(port=5000, debug=True)