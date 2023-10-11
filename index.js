const start = document.getElementById('start')
const pause = document.getElementById('pause')
const zerar = document.getElementById('zerar')
const displayTimer = document.getElementById('displayTimer')

let time = 0
let execute = false
let intervalId

function formatarTempo(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const seconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function atualizarDisplay() {
    displayTimer.textContent = formatarTempo(time);
}
start.addEventListener("click", function() {
    if (!execute) {
        execute = true;
        intervalId = setInterval(function() {
            time++;
            atualizarDisplay();
        }, 1000); // Atualiza a cada segundo
    }
});
pause.addEventListener("click", function() {
    if (execute) {
        execute = false;
        clearInterval(intervalId);
    }
});
zerar.addEventListener('click',()=>{
    displayTimer.textContent = '00:00:00'
    execute = false
    clearInterval(intervalId)
    time = 0
})
