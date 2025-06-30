// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add navigation active state
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Randomly scatter stickers in the background
window.addEventListener('DOMContentLoaded', () => {
    const stickerUrls = [
        'https://example.com/sticker1.png',
        'https://example.com/sticker2.png',
        'https://example.com/sticker3.png'
    ];
    const numStickers = 10;
    for (let i = 0; i < numStickers; i++) {
        const sticker = document.createElement('div');
        sticker.classList.add('sticker');
        const url = stickerUrls[i % stickerUrls.length];
        sticker.style.backgroundImage = `url('${url}')`;
        sticker.style.top = Math.random() * 100 + '%';
        sticker.style.left = Math.random() * 100 + '%';
        sticker.style.transform = `translate(-50%, -50%) rotate(${Math.random()*360}deg)`;
        document.body.appendChild(sticker);
    }
});
