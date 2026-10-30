from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from api.routes.__init__ import init_index_route
    from api.routes.predict import init_predict_route

    init_index_route(app)
    init_predict_route(app)

    return app