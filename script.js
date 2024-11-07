// Fungsi untuk membuat teks hasil input
function generateText() {
    const name = document.getElementById("nameInput").value;

    // Validasi input
    if (!name) {
        alert("Silakan masukkan nama.");
        return;
    }

    // Format teks hasil
    const textResult = `Nama: ${name}`;

    // Tampilkan teks di dalam elemen <p>
    document.getElementById("textOutput").textContent = textResult;
    document.getElementById("textOutputContainer").style.display = "block";
}
