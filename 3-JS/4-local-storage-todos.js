// Load saved data from localStorage
window.onload = function() {
    var data = localStorage.getItem("todos");
    if (data) {
        document.getElementById("todos").value = data;
    }
};

// Save data to localStorage
function saveData() {
    var todos = document.getElementById("todos").value;
    localStorage.setItem("todos", todos);
    alert("Data saved successfully!");
}