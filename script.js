for (let i = 0; i < 50; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(dot);
    // let main = document.getElementsByClassName('main')
    // main[0].appendChild(dot)
}
