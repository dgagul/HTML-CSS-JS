function toggleVisibility() {
    var element = document.getElementById("content");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}