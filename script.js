// Fungsi untuk membuat JSON hasil input
function generateJSON() {
    const url = document.getElementById("urlInput").value;
    const title = document.getElementById("titleInput").value;
    const description = document.getElementById("descriptionInput").value;
    const imageUrl = document.getElementById("imageInput").value;

    // Validasi input
    if (!url || !title || !description || !imageUrl) {
        alert("Silakan isi semua kolom.");
        return;
    }

    // Format JSON sebagai teks
    const jsonResult = `/short {\n  "url": "${url}",\n  "ogTitle": "${title}",\n  "ogDescription": "${description}",\n  "ogImage": "${imageUrl}"\n}`;

    // Tampilkan JSON di dalam textarea
    document.getElementById("jsonOutput").value = jsonResult;
    document.getElementById("jsonOutputContainer").style.display = "block";
}

// Fungsi untuk menyalin JSON ke clipboard
function copyToClipboard() {
    const copyText = document.getElementById("jsonOutput");
    copyText.select();
    document.execCommand("copy");
    alert("JSON berhasil dicopy!");
}

