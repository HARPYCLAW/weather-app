var loc = document.querySelector('.location');
var value = document.querySelector('.temp-value');
var climate = document.querySelector('.climate');
var icon = document.querySelector('.temp-icon');

window.addEventListener('load', () => {
    var long;
    var lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            var proxy = "https://cors-anywhere.herokuapp.com/";
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fa50ad6bad3d99a33562d82f2c2f47cc
            `;
            fetch(url)
            .then(async response => await response.json())
            .then(data => {
                console.log(data);
                const {name} = data;
                const {feels_like} = data.main;
                const {id, main} = data.weather[0];

                loc.textContent = name;
                value.textContent = Math.round(feels_like-273);
                climate.textContent = main;
                if(id < 250)
                icon.src = './icons/thunderstormmm.png.png';
                else if(id < 350)
                icon.src = './icons/umbrella.png';
                else if(id < 550)
                icon.src = './icons/rainnn.png.png';
                else if(id < 650)
                icon.src = './icons/snowww.png.png';
                else if(id < 800)
                icon.src = './icons/hazeee.png';
                else if(id === 800)
                icon.src = './icons/sunny.png.png';
                else if(id > 800)
                icon.src = './icons/clouddd.png';
            });
        });
    
    }
});