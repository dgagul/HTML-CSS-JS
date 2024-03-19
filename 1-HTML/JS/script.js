document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    // Construct greeting message
    var greeting = "Hallo, " + fname + " " + lname + "! Du bist super!";

    // Display greeting message with animation
    var greetingElement = document.getElementById("greetingMessage");
    greetingElement.textContent = greeting;
    greetingElement.style.transform = "scale(1)";
    
    // Reset form fields
    document.getElementById("myForm").reset();
    
    // Hide greeting message after 3 seconds
    setTimeout(function() {
        greetingElement.style.transform = "scale(0)";
    }, 3000);
});