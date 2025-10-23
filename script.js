const nameInput = document.getElementById('nameInput');
const kata = document.getElementById('kata');
const nextButton = document.getElementById('nextbutton');
const gambar = document.getElementById('gambar');
const buttonContainer = document.getElementById('buttonContainer');
const noButton = document.getElementById('noButton');
const audio = document.querySelector('audio');
const nextbutton2 = document.getElementById('nextbutton2')

buttonContainer.style.display = 'none';


function changeTextSmoothly(newText) {
    kata.classList.add('fade-out');
    setTimeout(() => {
        kata.textContent = newText;
        kata.classList.remove('fade-out');
        kata.classList.add('fade-in');
        setTimeout(() => kata.classList.remove('fade-in'), 300);
    }, 400);
}

function handleNext() {
    const name = nameInput.value.trim();
    if (name.toLowerCase() === 'nisa' || name.toLowerCase() === 'dira' ) { 
        changeTextSmoothly('Selamat hari valentine ' + name );
        gambar.src = 'asset/happy-valentines-day-happy-valentines.gif';
        nameInput.style.display = 'none';
        nextButton.style.display = 'none';
        nextbutton2.style.display = 'block';
        audio.play();
    } else if (name) {
        changeTextSmoothly('Selamat hari valentine ' + name );
        gambar.src = 'asset/happy-valentines-day-happy-valentines.gif';
        nameInput.style.display = 'none';
        nextButton.style.display = 'none';
        audio.play();
    } else {
        alert('Masukkan Nama Dengan Benar');
    }
}

nextButton.addEventListener('click', handleNext);

function nextbutton(){
    changeTextSmoothly('will you be my valentine ??');
    gambar.src = 'asset/f.gif';
    nameInput.style.display = 'none';
    nextButton.style.display = 'none';
    nextbutton2.style.display = 'none';
    buttonContainer.style.display = 'flex';
}

function buttonyes() {
    changeTextSmoothly("I knew you would say yes! ❤️");
    gambar.src = 'asset/d.gif';
    nameInput.style.display = 'none';
    nextButton.style.display = 'none';
    buttonContainer.style.display = 'none';
    gambar.style.width = '250px';
    gambar.style.height = '250px';
    kata.style.marginTop = '100px';
}

let noButtonClicked = false;

function moveNoButton() {
    if (!noButtonClicked) {
        noButton.style.transform = 'translateX(-200px)';
        noButtonClicked = true;
    } else {
        noButton.style.transform = 'translateX(0)';
        noButtonClicked = false;
    }
    noButton.style.transition = 'transform 0.3s ease-in-out';
}

noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-out {
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        .fade-in {
            opacity: 1;
            transform: scale(1);
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});


