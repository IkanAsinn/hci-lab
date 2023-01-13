$(document).ready(function () {
    document.getElementById("upload-profile").addEventListener("change", function () {
        var file = this.files[0];
        var allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (!allowedTypes.includes(file.type)) {
            alert("Invalid file type. Please upload an image.");
            this.value = null;
        }
    });
});
