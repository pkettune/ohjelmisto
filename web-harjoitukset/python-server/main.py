import json
from flask import Flask, request, Response, send_from_directory
app = Flask(__name__)

@app.route('/')
def hello():
    print("helloa kutsuttu")
    return "no hei vain"

# @app.route('/sum')
# def calculate_sum():
#     args = request.args
#     number1 = float(args.get("number1"))
#     number2 = float(args.get("number2"))
#     total_sum = number1+number2
#     #return str(total_sum)

#     response = {
#         "sovellus" : "yhteenlaskukone",
#         "number1" : number1,
#         "number2" : number2,
#         "total_sum" : total_sum
#     }

#     return response

# laskin reitti v2
@app.route('/sum2/<number1>/<number2>')
def calculate_sum2(number1, number2):
    try:
        number1 = float("number1")
        number2 = float("number2")
        total_sum = number1+number2
        #return str(total_sum)

        response = {
            "sovellus" : "yhteenlaskukone",
            "number1" : number1,
            "number2" : number2,
            "total_sum" : total_sum
        }
        return response
    
    except ValueError:
        response_content = json.dumps({"message" : "virheellinen pyyntö, tarkasta arvot"})
        http_response = Response(response=response_content, status=400, mimetype="application/json")
        return http_response









if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)
