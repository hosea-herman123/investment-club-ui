document.addEventListener('DOMContentLoaded', function() {
    
    // Select the elements
    const toggleFoundation = document.getElementById('toggleFoundation');
    const descFoundation = document.getElementById('descFoundation');
    
    const toggleEconomy = document.getElementById('toggleEconomy');
    const descEconomy = document.getElementById('descEconomy');

    // Function to toggle visibility
    function toggleDescription(element) {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    // Add Event Listeners
    toggleFoundation.addEventListener('click', function() {
        toggleDescription(descFoundation);
    });

    toggleEconomy.addEventListener('click', function() {
        toggleDescription(descEconomy);
    });

    // Optional: Add a simple console log to show script is running
    console.log("Frontend Assessment script initialized.");
});