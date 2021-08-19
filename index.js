let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};

let gifproduct = document.querySelectorAll(".product")
const apiKey = 'cmmAiafZ4UsJdPIWNc6bMF3K4NAEuzFH'
const id = ['yQ7JbMwf6PqI8','xUA7aQOfOFZyC4qvZe','lPRU2G6yzmwYqncjnw','oSYflamt3IEjm','0qiW1WuIJeGpk8sETT','tNSEiWUaT1RgPCBolg','YS0lG4cYQVsRQkOSql','xUOxeZR9gmFzbH8FRS','l3q2xK6E4Ost3fWFi']

const fetchIn = async (image, index) => {
  const response = await fetch(`http://api.giphy.com/v1/gifs/${id[index]}?api_key=${apiKey}`)
  const data = await response.json() 
  image.src = data.data.images.fixed_height.url
}

gifproduct.forEach((image, index) => {
  fetchIn(image, index)
});

var context= new AudioContext();

function jsNota(frecuencia){
    var o = context.createOscillator();
    g=context.createGain();
    o.connect(g);
    o.type="sawtooth";
    o.frequency.value=frecuencia;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
}

let keyWhite=['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyÑ']
let keyBlack=['KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyW', 'KeyU', 'KeyO', 'KeyP']

document.addEventListener('keydown',e=>{ 
    if (keyWhite.includes(e.code) || keyBlack.includes(e.code)) { 
        switch (e.code){ 
            case 'KeyA': 
                jsNota(138.591) 
                break 
            case 'KeyW': 
                jsNota(146.832)
                break 
            case 'KeyS': 
                jsNota(155.563)
                break 
            case 'KeyE': 
                jsNota(164.814)
                break 
            case 'KeyD': 
                jsNota(174.614) 
                break 
            case 'KeyF': 
                jsNota(184.997) 
                break 
            case 'KeyT': 
                jsNota(195.998) 
                break 
            case 'KeyG': 
                jsNota(207.652) 
                break 
            case 'KeyY': 
                jsNota(220.000) 
                break 
            case 'KeyH': 
                jsNota(233.082) 
                break 
            case 'KeyU': 
                jsNota(246.942) 
                break 
            case 'KeyJ': 
                jsNota(261.626) 
                break 
            case 'KeyK': 
                jsNota(277.183) 
                break 
            case 'KeyO': 
                jsNota(293.665) 
                break 
            case 'KeyL': 
                jsNota(311.127) 
                break 
            case 'KeyP': 
                jsNota(329.628) 
                break 
            case 'KeyÑ': 
                jsNota(349.228) 
                break 
            default: 
                break 
        } 
    } 
})