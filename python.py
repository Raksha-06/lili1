# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import json
# import ollama

# app = Flask(__name__)
# CORS(app)  # allow requests from any origin

# @app.route("/submit", methods=["POST"])
# def submit():
#     try:
#         data = request.json
#         activity_name = data.get("activityName")
#         status = data.get("status")
#         button_clicked = data.get("buttonClicked")
#         user_input = data.get("userInput")
#         mood = data.get("mood")

#         print(f"Received from React Native:\n{data}")

#         model_input = f"Mood: '{mood}'\nCBT Activity: '{activity_name}'\nSentence: '{user_input}'"

#         response = ollama.chat(
#             model="cbtgame_model",
#             messages=[{"role": "user", "content": model_input}]
#         )
#         print(response)

#         try:
#             model_result = json.loads(str(response))
#         except json.JSONDecodeError:
#             model_result = {"raw_response": str(response)}

#         return jsonify({"status": "success", "received": data, "model_result": model_result})
#     except Exception as e:
#         print("Error:", e)
#         return jsonify({"status": "error", "message": str(e)}), 500

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000, debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import ollama

app = Flask(__name__)
CORS(app)  # allow requests from any origin

@app.route("/submit", methods=["POST"])
def submit():
    try:
        data = request.json
        activity_name = data.get("activityName")
        status = data.get("status")
        button_clicked = data.get("buttonClicked")
        user_input = data.get("userInput")
        mood = data.get("mood")

        print(f"Received from React Native:\n{data}")

        model_input = f"Mood: '{mood}'\nCBT Activity: '{activity_name}'\nSentence: '{user_input}'"

        response = ollama.chat(
            model="cbtgame_model",
            messages=[{"role": "user", "content": model_input}]
        )
        print("Raw model response:", response)

        # Extract JSON from model response
        raw_content = response.message.content
        try:
            parsed = json.loads(raw_content)
            simplified_result = {
                "rating": parsed.get("rating"),
                "reason": parsed.get("reason"),
                "motivation": parsed.get("motivation")
            }
        except json.JSONDecodeError:
            simplified_result = {"rating": None, "reason": None, "motivation": None}

        # Send only simplified result to React Native
        return jsonify({
            "status": "success",
            "received": data,
            "model_result": simplified_result
        })

    except Exception as e:
        print("Error:", e)
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
#python python.py