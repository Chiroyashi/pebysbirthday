import { desc } from 'framer-motion/client';
import cover1 from '../assets/images/foto1.jpeg';
import cover2 from '../assets/images/foto2.jpeg';
import cover3 from '../assets/images/foto3.jpeg';
import cover4 from '../assets/images/foto4.jpeg';
import cover5 from '../assets/images/foto6.jpeg';
import cover6 from '../assets/images/foto5.jpeg';
import cover7 from '../assets/images/foto7.jpeg';

// Tambahkan import foto-foto momen di sini (contoh)
// import momen1a from '../assets/images/momen1a.jpeg';

export const AUTH_CONFIG = {
    KEYPASS_NAME: "IH CANTIK BANGET", 
    KEYPASS_DATE: "180206", 
};

export const PERSONAL_MESSAGES = {
    LOGIN_TITLE: "Haloo, Sayangkuu ❤️",
    LOGIN_SUBTITLE: "Website ini hanya untuk kita berdua, oteyy!",
    LOGIN_SUBTITLES: "(Masukkan password dibawah!)",
    HERO_TITLE: "Happy Birthday, Feby Yuanggi Putri! 🎂",
    HERO_SUBTITLE: "Setiap hari bersamamu adalah anugerah, tapi hari ini adalah yang paling spesial.",
    FOOTER_TEXT: "Portofolio perjalanan kita, made by Akbar",
    SUB: "Sedikit Ucapan",
    CONCLUSION: `Terima kasih ya sudah berjalan sejauh ini bersamaku. Melalui portofolio perjalanan kita ini, aku cuma ingin menunjukkan kalau setiap detik yang kita lalui itu berharga banget buat aku. Semoga kamu suka dengan hadiah kecil ini, sama seperti aku menyukai setiap cerita yang kita buat bareng-bareng.\n\nHappy Birthday, Sayang! ❤️`,
};

// Data Gallery yang sekarang jadi "Episode"
export const EPISODES_DATA = [
    {
        id: "momen-pertama", // ID untuk URL
        title: "Episode 1: Awal Jalan",
        coverImage: cover1,
        date: "22 Desember 2024",
        photos: [
            { 
                id: 1, 
                url: cover1, 
                caption: "Moment pertama kali ajak kamu jalan", 
                description: `Hehe, sayang fotonya ga ada yang berdua di momen pertama kita. Tapi di sini kamu cantik bangettt walapun kita agak kaku dan aku terlihat aneh waktu itu, kamu tetap suka dan kasih aku feedback yang lucuu. Makasih yaa💕\n\nSebenernya aku asbun mulu sih ngajak kamu kemana aja, tapi karna aku dulu sempet masuk tempat-tempat kaya gini mungkin rasanya beda kalau masuknya bareng ma kamu😂, ternyata seruu-nyaman-lucuu lagian kita cuma cari info stasium malah ke musium, udah gitu masuk-masuk jadi photographer post-wedding😂. Tapi gapapa bagiku semua momen/cerita yang kita alami itu bisa jadi skenario yang ga habis-habis, makanya aku buat semenarik mungkin buat kamu🫶` 
            },
            // { id: 2, url: mome2, caption: "Pas lagi makan bareng" },
        ]
    },
    {
        id: "senyum-favorit",
        title: "Episode 2: Momen Ternyaman",
        coverImage: cover2,
        date: "21 Juni 2025",
        photos: [
            { 
                id: 1, 
                url: cover2, 
                caption: "Senyum paling manis",
                description: "Wiii di sini nih menurutku momen yang aku suka, rasanya kayak malu-malu kucing yang lepas kandang wkwk😂. Tapi beneran tau, di sini kamu bloon cantik bikin aku susah mandang tapi karna cantik aku pengen lihat teruss. Hadeuhhhhhhh"
            },
        ]
    },
    {
        id: "kebersamaan",
        title: "Episode 3: Ke Curug!!",
        coverImage: cover3,
        date: "22 Agustus 2025",
        photos: [
            { 
                id: 1, 
                url: cover3, 
                caption: "YEYYY MAIN KELUAR KOTA!!",
                description: `Ini momen kita bisa puas istirahat dan main ke tempat baru. Untung kamu suka, kalo ga aku bisa apa...🥲🥲`
            },
            { 
                id: 2, 
                url: cover4, 
                caption: "Momen terdag-dig-dug",
                description: `Memang awalnya seru kita bisa main ke Little Ranch, tapi tau ga sih aku di cengin sama alfin kalo aku ga serius sama kamu. Dia bilang kapan kamu tembak peby? aku jawab serius Agustus aku seriusin. Akhirnya diwaktu ini aku nyari kesempatan berdua sama kamu biar admin dan mbak khil bisa jauh. Dan yes aku gagal wkwk cuma bisa ngomong dikit di situ. Tapi gapapa aku masih bisa bilang waktu kita lagi perjalanan pulang hehehehhe. At that time i love u so much as i could💕`
            },
        ]
    },
    {
        id: "barengan",
        title: "Bonus Episode",
        coverImage: cover5,
        date: "anytime",
        photos: [
            { 
                id: 1, 
                url: cover5, 
                caption: "",
                description: `Our Selfreward After PCC`
            },
            { 
                id: 2, 
                url: cover6, 
                caption: "",
                description: `Pinusian bareng!`
            },
            { 
                id: 3, 
                url: cover7, 
                caption: "",
                description: `Kenangan Proker PCC`
            },
        ]
    }
];