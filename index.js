alert("Assalomu alaykum");
alert("Dasturimizga xush kelibsiz!");

const elForm = document.querySelector('form');
const elInput = document.querySelector('.input');

const elFoot = document.querySelector('.name1');
const elBike = document.querySelector('.name2');
const elCar = document.querySelector('.name3');
const elPlane = document.querySelector('.name4');

elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const distance = Number(elInput.value.trim());

    if (!distance) {
        alert("Masofani kiriting!");
        return;
    } else {
        alert("Jarayon muvaffaqiyatli tarzda amalga oshirildi !");
        window.location.href = "https://github.com/sarvaribrokhimov001/A-Web-Page";
    }

    const walkingSpeed = 3.6;
    const bicyclingSpeed = 20.1;
    const carSpeed = 70;
    const planeSpeed = 800;

    elFoot.innerHTML = `${(distance / walkingSpeed).toFixed(1)} soat`;
    elBike.innerHTML = `${(distance / bicyclingSpeed).toFixed(1)} soat`;
    elCar.innerHTML = `${(distance / carSpeed).toFixed(1)} soat`;
    elPlane.innerHTML = `${(distance / planeSpeed).toFixed(1)} soat`;
    elInput.value = '';
});