let indeksPertanyaanSekarang = 0;
let jawabanDipilih = [];
let semuaJawaban = []; // Array untuk menyimpan semua jawaban yang dipilih

// Daftar pertanyaan dan pilihan jawaban
const pertanyaan = [
    {
        pertanyaan: "Lo mau makan apa?",
        jawaban: ["Ayam Goreng", "Gorengan", "Burger", "Snack"]
    },
    {
        pertanyaan: "Enaknya dimana?",
        jawaban: ["Pantai", "Gunung", "Taman"]
    },
    {
        pertanyaan: "Minum nya apa, Eka?",
        jawaban: ["Kopi", "Air Putih", "Air Putih sih, tapi kopi enak juga"]
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
        document.getElementById("pilihan3").textContent = pertanyaan[indeksPertanyaanSekarang].jawaban[2];
        
        // Cek jika ada pilihan ke-4
        if (pertanyaan[indeksPertanyaanSekarang].jawaban.length > 3) {
            document.getElementById("pilihan4").textContent = pertanyaan[indeksPertanyaanSekarang].jawaban[3];
        } else {
            document.getElementById("pilihan4").style.display = "none"; // Sembunyikan jika tidak ada
        }

        // Sembunyikan pesan akhir
        document.getElementById("pesanAkhir").style.display = "none";
    } else {
        // Jika sudah tidak ada pertanyaan lagi, tampilkan pesan akhir
        tampilkanPesanAkhir();
    }
}

function pilihJawaban(indeksJawaban) {
    // Simpan jawaban yang dipilih
    let jawaban = pertanyaan[indeksPertanyaanSekarang].jawaban[indeksJawaban];
    semuaJawaban.push(jawaban); // Tambahkan jawaban ke array semuaJawaban

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

    // Tampilkan pesan sesuai jawaban
    if (semuaJawaban[semuaJawaban.length - 1] === "Air Putih sih, tapi kopi enak juga") {
        document.getElementById("jawabanDipilih").textContent = "Nah kan, kenapa ga pilih kopi ajaa jirr! (ss responya kirim ke gwej)";
    } else {
        document.getElementById("jawabanDipilih").textContent = "Okedeh " + semuaJawaban[semuaJawaban.length - 1] + ", Tar gw bawain! (ss responya kirim ke gwej)";
    }

    // Tampilkan semua respon pilihan
    const listRespon = document.getElementById("listRespon");
    semuaJawaban.forEach((jawaban, index) => {
        const li = document.createElement("li");
        li.textContent = `Pertanyaan ${index + 1}: ${jawaban}`;
        listRespon.appendChild(li);
    });
}

// Memulai dengan pertanyaan pertama
perbaruiPertanyaan();
