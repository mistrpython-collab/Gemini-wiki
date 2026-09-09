// Mengambil elemen yang benar-benar ada di HTML
const tombol = document.getElementById("tombol-interaksi");
const gambar = document.getElementById("gemini-img");

// Menyiapkan daftar warna-warni pilihan
const daftarWarna = ["#d93025", "#f4b400", "#0d652d", "#9334e6", "#ff6d00", "#1a73e8"];

// Menambahkan aksi interaktif saat tombol diklik
tombol.addEventListener("click", function() {
    // Rumus untuk memilih satu warna secara acak dari daftar
    const warnaAcak = daftarWarna[Math.floor(Math.random() * daftarWarna.length)];
    
    // Menerapkan warna acak ke latar belakang tombol
    tombol.style.backgroundColor = warnaAcak;
    tombol.textContent = "Sapaan Warna-Warni! 🎨";
    
    // Memberikan efek animasi pada gambar
    gambar.style.transform = "scale(1.2)";
    
    // Mengembalikan ukuran gambar setelah 0.3 detik
    setTimeout(function() {
        gambar.style.transform = "scale(1)";
    }, 300);
});

// --- FITUR SCROLL TO TOP UNTUK HALAMAN PANJANG ---
const tombolAtas = document.getElementById("tombol-atas");

// Deteksi jika tombolAtas ada di halaman tersebut
if (tombolAtas) {
    // Memunculkan tombol saat di-scroll ke bawah 200px
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            tombolAtas.style.display = "block";
        } else {
            tombolAtas.style.display = "none";
        }
    };

    // Fungsi klik untuk meluncur ke atas
    tombolAtas.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Efek meluncur mulus
        });
    });
}