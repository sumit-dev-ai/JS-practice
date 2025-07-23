function radnomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval;
document.querySelector("#start").addEventListener("click", function () {
    if (!interval) {
        interval = setInterval(() => {
            document.body.style.backgroundColor = radnomColor();
        }, 1000);
    }

    document.querySelector("#stop").addEventListener("click", () => {
        clearInterval(interval);
        console.log("Random color generation stopped.");
        interval = null;
    });
}

);