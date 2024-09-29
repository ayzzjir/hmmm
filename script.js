let indeksPertanyaanSekarang = 0;
let jawabanDipilih = "";

// Daftar pertanyaan dan pilihan jawaban
const pertanyaan = [
    {
        pertanyaan: "Lo mau makan apa?",
        jawaban: ["Ayam Goreng", "Gorengan", "Burger"]
    },
    {
        pertanyaan: "enaknya dimana?",
        jawaban: ["Pantai", "Gunung", "taman"]
    },
    {
        pertanyaan: "Minum nya apa eka?",
        jawaban: ["Kopi", "aer putih", "aer putih sih tapi kopi enak juga"]
    }
];

function perbaruiPertanyaan() {
    // Cek apakah masih ada pertanyaan yang tersisa
    if (indeksPertanyaanSekarang < pertanyaan.length) {
        // Tampilkan pertanyaan berikutnya
        document.getElementById("teksPertanyaan").textContent = pertanyaan[indeksPertanyaanSekarang].pertanyaan;

        // Tampilkan opsi jawaban
        document.getElementById("pilihan1").textContent = pertanyaan[indeksPertanyaanSekarang].jawaban[0];
        document.getElementById("pilihan2").textContent = pertanyaan[indeksPertanyaanSekarang].jawaban[1];
    } else {
        // Jika sudah tidak ada pertanyaan lagi, tampilkan pesan akhir
        tampilkanPesanAkhir();
    }
}

function pilihJawaban(indeksJawaban) {
    // Simpan jawaban yang dipilih
    jawabanDipilih = pertanyaan[indeksPertanyaanSekarang].jawaban[indeksJawaban];

    // Lanjut ke pertanyaan berikutnya
    indeksPertanyaanSekarang++;

    // Perbarui pertanyaan
    perbaruiPertanyaan();
}

function tampilkanPesanAkhir() {
    // Sembunyikan bagian pertanyaan
    document.getElementById("pertanyaan").style.display = "none";

    // Tampilkan pesan akhir
    document.getElementById("pesanAkhir").style.display = "block";

    // Tampilkan jawaban yang dipilih
    document.getElementById("jawabanDipilih").textContent = jawabanDipilih;
}

// Memulai dengan pertanyaan pertama
perbaruiPertanyaan();
