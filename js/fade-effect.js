/**
 * Plugin criado por:
 * Paulo Cezario
 * https://github.com/phscezario
 **/
(function() {
    let checking = true;

    const fadeIn = Array.from(document.querySelectorAll('.fade-in'));
    const fadeUp = Array.from(document.querySelectorAll('.fade-up'));
    const fadeDown = Array.from(document.querySelectorAll('.fade-down'));
    const fadeLeft = Array.from(document.querySelectorAll('.fade-left'));
    const fadeRight = Array.from(document.querySelectorAll('.fade-right')); 
    const fadeCascade = Array.from(document.querySelectorAll('.fade-cascade'));
    const allFadeElements = fadeIn.concat(fadeUp, fadeDown, fadeLeft, fadeRight, fadeCascade);

    function isOnScreen(el) {
        const rect = el.getBoundingClientRect(); 
        return rect.top >= 0 && (rect.top + 100) <= window.innerHeight;
    }

    function playAnimation(el) {
        if(isOnScreen(el)) {
            const animationTime = el.getAttribute('data-animation-time');
            const animationDelay = el.getAttribute('data-animation-delay');

            if(animationTime !== "" || isNaN(animationTime)) {
                el.style.animationDuration = `${animationTime}s`;
            }
            if(animationDelay !== "" || isNaN(animationDelay)) {
                el.style.animationDelay = `${animationDelay}s`;
            }

            if(el.classList.contains('fade-cascade')) {
                const direction = el.getAttribute('data-animation-direction');
                let increment = Number(el.getAttribute('data-animation-increment'));
                let incrementSum = 0;

                if(increment <= 0 || isNaN(increment)) increment = 0.5;

                const children = Array.from(el.children);

                for(let i = 0; i < children.length; i++) {
                    switch(direction) {
                        case 'down':
                            children[i].classList.add('fade-up');
                        break;
                        case 'right':
                            children[i].classList.add('fade-left');
                        break;
                        case 'left':
                            children[i].classList.add('fade-right');
                        break;
                        default:
                            children[i].classList.add('fade-down');
                    }
                    children[i].style.animationDelay = `${incrementSum += increment}s`;
                    children[i].style.animationPlayState = 'running';
                }
            }
            
            el.style.animationPlayState = 'running';
        }
    }

    // Executa apenas uma vez a cada 150ms
    function render() {
        if(checking) {
            allFadeElements.forEach(playAnimation); 
            checking = false;
        }
        else setTimeout(checking = true, 150);
    } 

    // Exibe os elemento que já estão
    // na tela antes do primeiro scroll
    render();

    window.addEventListener('scroll', render);
})();