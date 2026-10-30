from flask import request, jsonify
from services.inference import classify_waste_type

def init_predict_route(app):
    @app.route("/predict", methods=["POST"])
    def classify_trash_image():
        if "image" not in request.files:
            return jsonify({
                "status": "error",
                "message": "No image found"
            }), 400

        file = request.files["image"]

        if file.filename == "":
            return jsonify({
                "status": "error",
                "message": "No file selected"
            }), 400

        try:
            result = classify_waste_type(file)

            return jsonify({
                "status": "success",
                "result": result
            }), 200
        
        except Exception as e:
            return jsonify({
                "status": "error",
                "message": str(e)
            }), 500