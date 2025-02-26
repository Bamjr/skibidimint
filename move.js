class BouncingImage {
    constructor(element, speed) {
        this.element = element;
        this.x = Math.random() * (window.innerWidth - 100);
        this.y = Math.random() * (window.innerHeight - 50);
        this.dx = (Math.random() > 0.5 ? 1 : -1) * speed;
        this.dy = (Math.random() > 0.5 ? 1 : -1) * speed;
    }

    move() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const width = this.element.clientWidth;
        const height = this.element.clientHeight;

        this.x += this.dx;
        this.y += this.dy;

        if (this.x + width >= screenWidth || this.x <= 0) {
            this.dx *= -1;
            this.changeColor();
        }

        if (this.y + height >= screenHeight || this.y <= 0) {
            this.dy *= -1;
            this.changeColor();
        }

        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';

        requestAnimationFrame(() => this.move());
    }

    changeColor() {
        this.element.style.filter = `invert(${Math.random() * 100}%)`;
    }
}

window.onload = function() {
    const dvd1 = new BouncingImage(document.querySelector('.dvd1'), 2);
    const dvd2 = new BouncingImage(document.querySelector('.dvd2'), 3);

    dvd1.move();
    dvd2.move();
};


let audio = document.getElementById("bg-music");
console.log(audio); // ตรวจสอบว่าได้ element หรือไม่

function playMusic() {
    if (!audio) {
        console.log("ไม่พบ element <audio>!");
        return;
    }
    
    audio.play().then(() => {
        console.log("เสียงกำลังเล่น...");
    }).catch(error => {
        console.log("ต้องให้ผู้ใช้กดปุ่มก่อน: ", error);
    });
}

function pauseMusic() {
    if (!audio) {
        console.log("ไม่พบ element <audio>!");
        return;
    }
    
    audio.pause();
}