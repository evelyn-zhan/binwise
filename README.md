# ♻️ BinWise — Waste Image Classifier

![Python](https://img.shields.io/badge/Python-3-blue)
![Flask](https://img.shields.io/badge/Backend-Flask-black)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20TS-61DAFB)
![Model](https://img.shields.io/badge/Model-EfficientNetV2B0-orange)

A web app that classifies waste from a photo using deep learning. Upload an image, and BinWise will tell you what type of waste it is, so sorting your trash becomes quick and easy.

## 🌟 Features

- **Image Upload:** Upload a photo of waste directly from the web interface.
- **Instant Results:** Get the predicted waste category within seconds.

## 🛠️ Tech Stack

### 🎨 Frontend

- React
- TypeScript

### ⚙️ Backend

- Flask (REST API)

### 🧠 Model

- EfficientNetV2B0 (transfer learning / fine-tuning)

## 📁 Project Structure

```
binwise/
├── backend/     # Flask API that serves the model
├── frontend/    # React + TypeScript web app
└── notebook/    # Data exploration, training, and evaluation
```

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/evelyn-zhan/binwise.git
cd binwise
```

### 2. Run the backend

```bash
cd backend
pip install -r requirements.txt
```

To run locally, open `app.py` and edit the bottom of the file:
- uncomment the first `app.run(...)` line.
- comment out the last two lines (those are meant for deployment).

```python
if __name__ == "__main__":
    app.run(port=8000, debug=True)
    # port = int(os.environ.get("PORT", 8000))
    # app.run(host="0.0.0.0", port=port)
```

Then start the server:

```bash
python app.py
```

The API runs at `http://localhost:8000`.

### 3. Run the frontend

Open a new terminal, then:

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

⚠️ Make sure the backend is running first, otherwise the frontend can't get predictions.