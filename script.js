function generatePreview() {
    const url = document.getElementById("urlInput").value;
    const title = document.getElementById("titleInput").value;
    const description = document.getElementById("descriptionInput").value;
    const imageUrl = document.getElementById("imageInput").value;

    // Validasi input
    if (!url || !title || !description || !imageUrl) {
        alert("Silakan isi semua kolom.");
        return;
    }

    // Tampilkan pratinjau
    document.getElementById("preview").style.display = "block";
    document.getElementById("previewTitle").textContent = title;
    document.getElementById("previewDescription").textContent = description;
    document.getElementById("previewImage").src = imageUrl;
    document.getElementById("previewURL").href = url;
}
