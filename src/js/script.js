const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');
const volumeSwitcher = document.querySelector('#volume');

let audioVolume = 0.5;

const playNote = (note) => {
    const audio = new Audio(`vendor/notes/${note}.wav`);
    audio.volume = audioVolume;
    audio.play();
};

const handleMouseDown = (key) => {
    const note = key.getAttribute('data-note');
    playNote(note);

    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
    };

    key.style.background = "#dddddd";
};

const handleMouseUp = (key) => {
    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    };

    key.style.background = "#ffffff";
};

keys.forEach((key) => {

    key.addEventListener('mousedown', () => handleMouseDown(key));

    key.addEventListener('mouseup', () => handleMouseUp(key));
});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('keys--disabled');
        return;
    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('keys--disabled');
});

const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "q": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "w": () => handleMouseDown(keys[4]),
    "e": () => handleMouseDown(keys[5]),
    "4": () => handleMouseDown(keys[6]),
    "r": () => handleMouseDown(keys[7]),
    "5": () => handleMouseDown(keys[8]),
    "t": () => handleMouseDown(keys[9]),
    "6": () => handleMouseDown(keys[10]),
    "y": () => handleMouseDown(keys[11]),
    "u": () => handleMouseDown(keys[12]),
    "8": () => handleMouseDown(keys[13]),
    "i": () => handleMouseDown(keys[14]),
    "9": () => handleMouseDown(keys[15]),
    "o": () => handleMouseDown(keys[16]),
    "p": () => handleMouseDown(keys[17]),
    "-": () => handleMouseDown(keys[18]),
    "[": () => handleMouseDown(keys[19]),
    "=": () => handleMouseDown(keys[20]),
    "]": () => handleMouseDown(keys[21]),
    "Backspace": () => handleMouseDown(keys[22]),
    "\\": () => handleMouseDown(keys[23]),
}

const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "q": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "w": () => handleMouseUp(keys[4]),
    "e": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "r": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "t": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "y": () => handleMouseUp(keys[11]),
    "u": () => handleMouseUp(keys[12]),
    "8": () => handleMouseUp(keys[13]),
    "i": () => handleMouseUp(keys[14]),
    "9": () => handleMouseUp(keys[15]),
    "o": () => handleMouseUp(keys[16]),
    "p": () => handleMouseUp(keys[17]),
    "-": () => handleMouseUp(keys[18]),
    "[": () => handleMouseUp(keys[19]),
    "=": () => handleMouseUp(keys[20]),
    "]": () => handleMouseUp(keys[21]),
    "Backspace": () => handleMouseUp(keys[22]),
    "\\": () => handleMouseUp(keys[23]),
};

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (Object.hasOwn(keyDownMapper, event.key)) {
        keyDownMapper[event.key]();
    }
});

document.addEventListener('keyup', (event) => {
    if (Object.hasOwn(keyUpMapper, event.key)) {
        keyUpMapper[event.key]();
    }
});

volumeSwitcher.addEventListener('change', ({ target }) => {
    audioVolume = target.value;
})