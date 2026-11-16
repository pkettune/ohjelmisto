import json
from flask import Flask, request, Response, send_from_directory

app = Flask(__name__)

@app.route('/prime_number/<number>')
def checkPrime(number):
    try:
        number = int(number)
        if number < 2:
            response =  {"Number": number, "isPrime": False}
            return response
        divisor = 2
        while divisor * divisor <= number:
            if number % divisor == 0:
                response =  {"Number": number, "isPrime": False}
                return response
            divisor += 1
        response = {"Number": number, "isPrime": True}
        return response

    except ValueError:
        response_content = json.dumps({"message": "virheellinen pyyntö, tarkasta arvot"})
        response = Response(response=response_content, status=400, mimetype="application/json")
        return response

@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "Invalid endpoint",
        "status": 404
    }
    json_response = json.dumps(response)
    http_response = Response(response=json_response, status=404, mimetype="application/json")
    return http_response

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)
