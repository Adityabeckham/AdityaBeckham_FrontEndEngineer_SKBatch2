# Careerly - Role Explorer

 Mini Assignment Front-End Engineer Intern Sekolah Karir Batch 2.

## Fitur

- Filter lowongan berdasarkan departemen
- Menampilkan semua lowongan secara default
- Jumlah hasil dinamis
- State kosong ketika tidak ada lowongan
- Tata letak responsif untuk desktop, tablet, dan mobile
- Komponen React yang dapat digunakan kembali

## Teknologi

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

## Cara Menjalankan

Kloning repositori:

    git clone https://github.com/Adityabeckham/Mini-Assignment-Internsip
    cd careerly-role-explorer

Instal dependensi:

    npm install

Jalankan server pengembangan:

    npm run dev

Build untuk produksi:

    npm run build

## Struktur Folder

    careerly-role-explorer/
    ├── public/
    │   └── favicon.svg          # Ikon favicon aplikasi
    ├── src/
    │   ├── components/
    │   │   ├── DepartmentFilter.jsx  # Tombol filter departemen
    │   │   ├── EmptyState.jsx       # Tampilan saat tidak ada lowongan
    │   │   ├── Header.jsx           # Header/navigasi aplikasi
    │   │   ├── RoleCard.jsx         # Kartu detail satu lowongan
    │   │   └── RoleExplorer.jsx     # Logika filter dan daftar lowongan
    │   ├── data/
    │   │   └── roles.js             # Data lowongan kerja
    │   ├── App.jsx                  # Komponen utama aplikasi
    │   ├── index.css                # Gaya global (Tailwind)
    │   └── main.jsx                 # Titik masuk React
    ├── index.html                   # Template HTML utama
    ├── package.json                 # Dependensi dan skrip
    ├── vite.config.js               # Konfigurasi Vite
    └── README.md                    # Dokumentasi proyek

## Workflow
<img width="500" height="350" alt="Screenshot 2026-11-12 014741" src="https://github.com/user-attachments/assets/f0a1e113-6d2f-4c2e-aa1e-84ae050c1133" />

## Link Preview
- https://role-explorer.netlify.app/


## Pengungkapan Penggunaan AI

Alat AI: Opencode

Penggunaan:
- Membantu perencanaan teknis dan struktur proyek.
- Menjelaskan manajemen state React dan logika filter.
- Membantu panduan implementasi dan tinjauan kode.



## Penulis

Aditya Beckham
