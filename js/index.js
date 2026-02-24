document.addEventListener("DOMContentLoaded", () => {
    function setupToggle(btnId, bodyId) {
        const btn = document.getElementById(btnId);
        const body = document.getElementById(bodyId);

        btn.addEventListener("click", () => {
            body.style.display = (body.style.display === "block") ? "none" : "block";
        });
    }

    setupToggle("foundationToggle", "foundationBody");
    setupToggle("economyToggle", "economyBody");
});