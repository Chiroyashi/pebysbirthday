// 1. Import foto-foto terlebih dahulu agar dikenali oleh Vite
import foto1 from '../assets/images/foto1.jpg';
import foto2 from '../assets/images/foto2.jpg';
import foto3 from '../assets/images/foto3.jpg';

// 1. Konfigurasi Kunci Akses (Auth)
export const AUTH_CONFIG = {
    // Nama yang harus diketik pacarmu untuk masuk (case-insensitive)
    KEYPASS_NAME: "peby", 
    // Opsi: Bisa kamu tambahkan tanggal jadian jika ingin sistem dua kunci
    KEYPASS_DATE: "1510", 
};

// 2. Data Pesan Personal
export const PERSONAL_MESSAGES = {
    LOGIN_TITLE: "Hello, Favorite Person! ❤️",
    LOGIN_SUBTITLE: "Halaman ini cuma buat kamu, silakan masukkan kunci rahasia kita.",
    HERO_TITLE: "Happy Birthday, Peby! 🎂",
    HERO_SUBTITLE: "Setiap hari bersamamu adalah anugerah, tapi hari ini adalah yang paling spesial.",
    FOOTER_TEXT: "Dibuat dengan sayang oleh Akbar ❤️", // Sesuaikan dengan namamu
};

// 3. Data Galeri Foto
export const GALLERY_DATA = [
    {
        id: 1,
        imageUrl: foto1, // Menggunakan variabel import
        caption: "Waktu kita pertama kali jalan-jalan bareng",
        date: "12 Januari 2024"
    },
    {
        id: 2,
        imageUrl: foto2, // Menggunakan variabel import
        caption: "Senyum favorit aku sepanjang masa",
        date: "14 Februari 2024"
    },
    {
        id: 3,
        imageUrl: foto3, // Menggunakan variabel import
        caption: "Terima kasih sudah selalu ada di sampingku",
        date: "01 Januari 2025"
    }
];

// 4. Data Timeline (Cerita Perjalanan Kalian)
export const TIMELINE_DATA = [
    {
        year: "2023",
        title: "Pertama Ketemu",
        description: "Hari dimana dunia terasa lebih cerah karena ada kamu."
    },
    {
        year: "2024",
        title: "Moment Spesial",
        description: "Banyak tawa dan cerita yang kita lalui bersama."
    },
    {
        year: "2025",
        title: "Ulang Tahun Ini",
        description: "Semoga semua impianmu tercapai dan kita tetap bareng terus."
    }
];