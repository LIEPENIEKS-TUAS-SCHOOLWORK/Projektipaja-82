const preloader = document.getElementById('pre-loader');


const fadeOutEffect = setInterval(() => {
    
    if (preloader.style.opacity>-0.1) {
        preloader.style.opacity -= 0.1;
    }
    else
        {
            preloader.remove();
        }
}, 200);

window.addEventListener('load', fadeOutEffect);
