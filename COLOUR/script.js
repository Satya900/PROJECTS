function clicking() {
    document.getElementById("clickme").addEventListener("click", function() {
        const randomColor = "#" + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
        document.body.style.backgroundColor = randomColor;
    });
}
document.getElementById("clickme").addEventListener("click", clicking);