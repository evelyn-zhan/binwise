import numpy as np
from PIL import Image
import tensorflow as tf
from tensorflow.keras.applications.efficientnet_v2 import preprocess_input
from tensorflow.keras.layers import TFSMLayer

model = TFSMLayer("models", call_endpoint="serving_default")

def preprocess_image(image):
    image = Image.open(image)
    if image.mode != "RGB":
        image = image.convert("RGB")
    image = image.resize((224, 224))
    image = np.array(image, dtype=np.float32)
    image = np.expand_dims(image, axis=0)
    image = preprocess_input(image)
    return image

def classify_waste_type(image):
    with open("models/labels.txt", "r") as f:
        labels = [label.replace("\n", "") for label in f.readlines()]

    image = preprocess_image(image)

    prediction = model(image)
    prediction = list(prediction.values())[0]
    predicted_class_index = np.argmax(prediction[0])
    predicted_label = labels[predicted_class_index]

    return predicted_label