from flask import Flask, request, jsonify
from ollama import chat
import re

app = Flask(__name__)

@app.route('/rest-assured-test', methods=['POST'])
def generate_test():
    data = request.get_json()

    if 'api_code' not in data:
        return jsonify({'error': 'Missing api_code parameter'}), 400

    api_code = data['api_code']

    response = chat(model='deepseek-r1:7b', messages=[
        {
            'role': 'user',
            'content': f'''You are an experienced API test engineer. Given a Java Spring Boot API endpoint, your task is to generate a comprehensive API test using RestAssured. The generated test should include:
A clear setup with necessary imports and configurations.
A well-structured test method using RestAssured to send a request to the API.
Assertions to validate the response status, headers, and body.
Proper handling of request parameters, headers, and authentication if required.
Here is the API code that needs to be tested:

{api_code}

Your response should only include the Java test code with clear structure and best practices. Avoid unnecessary explanations.'''
        }
    ])

    generated_test = re.sub(r'<think>.*?</think>', '', response.message.content, flags=re.DOTALL)

    return jsonify({'generated_test': generated_test})

if __name__ == '__main__':
    app.run(debug=True)
