

const padid = document.getElementById("pad");
function createbox(container) {
    const box = document.createElement('div');
    box.style.display = 'block';
    box.style.width = '50px';
    box.style.height = '50px';
    box.onmouseover = function() { 
    this.style.backgroundColor = RandomColor();
    }
    container.appendChild(box);
}

function submit() {
    const userinput = document.getElementById('getnum');
    const inputValue = parseInt(userinput.value, 10);
    pad.innerHTML = '';
    for (let u = 0; u < inputValue; u++) {
        padid.style.width = `${50*(u+2)}px`
        for (let i = 0; i < inputValue; i++) {
            createbox(padid);
        }
    }
}
function RandomColor() {
        const r = Math.floor(Math.random() * 256); // 0–255
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
console.log(RandomColor())