// Data soal sederhana per mapel (5 soal contoh)
const quizData = {
  matematika: [
    {
      question: "1. Berapakah hasil dari 7 × 8?",
      options: ["54", "56", "58", "60"],
      answer: "56",
    },
    {
      question: "2. Limit dari f(x) = 3x + 2 saat x → 1 adalah?",
      options: ["5", "3", "6", "4"],
      answer: "5",
    },
    {
      question: "3. Integral dari f(x) = 2 adalah?",
      options: ["2x + C", "x^2 + C", "2x^2 + C", "Tidak ada"],
      answer: "2x + C",
    },
    {
      question: "4. Fungsi kuadrat berbentuk?",
      options: ["ax + b", "ax^2 + bx + c", "ax^3 + b", "x^2 + x + 1"],
      answer: "ax^2 + bx + c",
    },
    {
      question: "5. Apa itu statistik?",
      options: ["Ilmu tentang data", "Ilmu tentang hewan", "Ilmu tentang tumbuhan", "Ilmu tentang bintang"],
      answer: "Ilmu tentang data",
    },
  ],
  fisika: [
    {
      question: "1. Hukum Newton pertama menyatakan?",
      options: [
        "Gaya = massa × percepatan",
        "Setiap benda diam atau bergerak lurus beraturan kecuali ada gaya luar",
        "Energi tidak dapat hilang",
        "Energi kinetik sama dengan energi potensial",
      ],
      answer: "Setiap benda diam atau bergerak lurus beraturan kecuali ada gaya luar",
    },
    {
      question: "2. Satuan percepatan adalah?",
      options: ["m/s", "m/s^2", "km/h", "N"],
      answer: "m/s^2",
    },
    {
      question: "3. Apa itu energi kinetik?",
      options: [
        "Energi gerak",
        "Energi panas",
        "Energi potensial",
        "Energi kimia",
      ],
      answer: "Energi gerak",
    },
    {
      question: "4. Gelombang transversal contohnya?",
      options: ["Gelombang suara", "Gelombang cahaya", "Gelombang gempa", "Gelombang radio"],
      answer: "Gelombang cahaya",
    },
    {
      question: "5. Hukum kekekalan energi menyatakan?",
      options: [
        "Energi dapat hilang",
        "Energi tidak dapat diciptakan atau dimusnahkan",
        "Energi berubah menjadi massa",
        "Energi selalu bertambah",
      ],
      answer: "Energi tidak dapat diciptakan atau dimusnahkan",
    },
  ],
  biologi: [
    {
      question: "1. Unit terkecil kehidupan adalah?",
      options: ["Organel", "Sel", "Jaringan", "Organ"],
      answer: "Sel",
    },
    {
      question: "2. Gen adalah?",
      options: [
        "Bagian dari DNA yang mengatur sifat",
        "Bagian dari sel yang mengatur gerak",
        "Bagian dari tubuh",
        "Bagian dari lingkungan",
      ],
      answer: "Bagian dari DNA yang mengatur sifat",
    },
    {
      question: "3. Ekosistem terdiri dari?",
      options: [
        "Makhluk hidup dan lingkungan",
        "Hanya makhluk hidup",
        "Hanya lingkungan",
        "Hanya tumbuhan",
      ],
      answer: "Makhluk hidup dan lingkungan",
    },
    {
      question: "4. Organ yang berfungsi menyerap nutrisi adalah?",
      options: ["Paru-paru", "Hati", "Usus halus", "Jantung"],
      answer: "Usus halus",
    },
    {
      question: "5. Fotosintesis terjadi di?",
      options: ["Kloroplas", "Mitokondria", "Nukleus", "Sitoplasma"],
      answer: "Kloroplas",
    },
  ],
  informatika: [
    {
      question: "1. Algoritma adalah?",
      options: [
        "Urutan langkah penyelesaian masalah",
        "Bahasa pemrograman",
        "Program komputer",
        "Jenis komputer",
      ],
      answer: "Urutan langkah penyelesaian masalah",
    },
    {
      question: "2. Bahasa pemrograman populer untuk web adalah?",
      options: ["Python", "HTML", "JavaScript", "SQL"],
      answer: "JavaScript",
    },
    {
      question: "3. Struktur data yang menggunakan prinsip FIFO adalah?",
      options: ["Stack", "Queue", "Array", "Tree"],
      answer: "Queue",
    },
    {
      question: "4. HTTP adalah protokol untuk?",
      options: [
        "Mengirim email",
        "Mengakses web",
        "Transfer file",
        "Keamanan jaringan",
      ],
      answer: "Mengakses web",
    },
    {
      question: "5. Keamanan siber bertujuan untuk?",
      options: [
        "Melindungi data dan sistem",
        "Menghapus virus",
        "Meningkatkan kecepatan internet",
        "Mengontrol jaringan",
      ],
      answer: "Melindungi data dan sistem",
    },
  ],
};

// Fungsi render soal di form
function renderQuiz(subject) {
  const form = document.getElementById(`form-${subject}`);
  form.innerHTML = ""; // kosongkan dulu
  const questions = quizData[subject];
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("question");

    const p = document.createElement("p");
    p.textContent = q.question;
    div.appendChild(p);

    q.options.forEach((option) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${i}`;
      input.value = option;
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      div.appendChild(label);
    });

    form.appendChild(div);
  });
}

// Submit quiz dan hitung skor
function submitQuiz(subject) {
  const questions = quizData[subject];
  let score = 0;
  const form = document.getElementById(`form-${subject}`);

  for (let i = 0; i < questions.length; i++) {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === questions[i].answer) {
      score++;
    }
  }

  const scoreEl = document.getElementById(`score-${subject}`);
  scoreEl.textContent = `Skor kamu: ${score} / ${questions.length} 🎉`;
}

// Navigasi section
function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((sec) => {
    if (sec.id === sectionId) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });
}

// Event listener untuk navbar
document.addEventListener("DOMContentLoaded", () => {
  // Loading screen hilang setelah 2 detik
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
  }, 2000);

  // Tampilkan beranda dulu
  showSection("beranda");

  // Render semua soal saat load biar responsif
  Object.keys(quizData).forEach((subject) => renderQuiz(subject));

  // Navbar klik
  const navLinks = document.querySelectorAll("nav a[data-section]");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = link.getAttribute("data-section");
      showSection(section);
      window.scrollTo(0, 0);
    });
  });

  // Form submit event
  Object.keys(quizData).forEach((subject) => {
    const form = document.getElementById(`form-${subject}`);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitQuiz(subject);
    });
  });
});
