// Mengambil elemen dari HTML
const tombol = document.getElementById("tombol-interaksi");
const teks = document.getElementById("pesan-teks");
const gambar = document.getElementById("gemini-img");

// Menambahkan aksi saat tombol diklik
tombol.addEventListener("click", function() {
    teks.textContent = "Halo ThinkyPat26! Senang bisa membantumu belajar Coding & Git hari ini. Terus semangat ya! ✨";
    gambar.style.transform = "scale(1.2)"; // Membuat gambar sedikit membesar
    tombol.textContent = "Sapaan Diterima!";
    tombol.style.backgroundColor = "#0d652d"; // Berubah hijau
});