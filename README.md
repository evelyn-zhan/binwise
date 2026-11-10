# ♻️ Binwise — Waste Image Classifier

![Python](https://img.shields.io/badge/Python-blue)
![Flask](https://img.shields.io/badge/Backend-Flask-black)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20TS-61DAFB)
![Model](https://img.shields.io/badge/Model-EfficientNetV2B0-orange)

Binwise merupakan aplikasi web untuk mengklasifikasikan sampah berdasarkan gambar dengan memanfaatkan deep learning. Unggah sebuah gambar dan Binwise akan memberitahu kategori sampah tersebut, sehingga pemilahan sampah menjadi cepat dan mudah.

🔗 **Deployment:** [https://binwise-web.vercel.app](https://go-binwise.vercel.app)

## 🌟 Fitur

- **Unggah Gambar:** Unggah gambar sampah langsung ke antarmuka aplikasi web.
- **Hasil Instan:** Dapatkan hasil prediksinya dalam hitungan detik.

## 🛠️ Teknologi

### 🎨 Frontend

- React
- TypeScript

### ⚙️ Backend

- Flask (REST API)

### 🧠 Model

- EfficientNetV2B0 (transfer learning / fine-tuning)

## 📁 Struktur Proyek

```
binwise/
├── backend/     # API Flask yang menyajikan model
├── frontend/    # Aplikasi web React + TypeScript
└── notebook/    # Eksplorasi data, pelatihan, dan evaluasi model
```

## ⚡ Cara Menjalankan Proyek

### 1. Clone repository

```bash
git clone https://github.com/evelyn-zhan/binwise.git
cd binwise
```

### 2. Jalankan backend

```bash
cd backend
pip install -r requirements.txt
```

Untuk menjalankan secara lokal, buka `app.py` lalu ubah bagian bawah file:
- hapus komentar pada baris `app.run(...)` yang pertama.
- beri komentar pada dua baris terakhir (keduanya digunakan untuk deployment).

```python
if __name__ == "__main__":
    app.run(port=8000, debug=True)
    # port = int(os.environ.get("PORT", 8000))
    # app.run(host="0.0.0.0", port=port)
```

Lalu jalankan servernya:

```bash
python app.py
```

API akan berjalan di `http://localhost:8000`.

### 3. Jalankan frontend

Buka terminal baru, lalu jalankan:

```bash
cd frontend
npm install
npm run dev
```

Buka URL yang muncul di terminal (biasanya `http://localhost:5173`).

⚠️ Pastikan backend sudah berjalan terlebih dahulu. Jika tidak, frontend tidak bisa mendapatkan hasil prediksi.
