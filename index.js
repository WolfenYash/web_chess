document.getElementById("chessLogo").addEventListener("click", function () {
    this.style.transform = `rotate(${Math.random() * 360}deg)`;
    this.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});
