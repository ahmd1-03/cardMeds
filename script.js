// Menyimpan referensi elemen tombol dan kartu
const nextBtn = document.getElementById("nextBtn"); // Tombol untuk pindah ke kartu kedua
const backBtn = document.getElementById("backBtn"); // Tombol kembali ke kartu pertama
const card1 = document.getElementById("card1"); // Kartu pertama (intro)
const card2 = document.getElementById("card2"); // Kartu kedua (kontak)

// Event ketika tombol "Let's Connect" diklik
nextBtn.addEventListener("click", () => {
  card1.style.transform = "translateY(-100%)"; // Geser kartu 1 ke atas
  card1.style.opacity = "0"; // Sembunyikan kartu 1
  card2.style.transform = "translateY(0)"; // Tampilkan kartu 2
  card2.style.opacity = "1"; // Tampilkan kartu 2 sepenuhnya
});

// Event ketika tombol "Back" diklik
backBtn.addEventListener("click", () => {
  card2.style.transform = "translateY(100%)"; // Geser kartu 2 ke bawah
  card2.style.opacity = "0"; // Sembunyikan kartu 2
  card1.style.transform = "translateY(0)"; // Kembalikan kartu 1 ke posisi awal
  card1.style.opacity = "1"; // Tampilkan kartu 1
});
