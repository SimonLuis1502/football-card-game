const addButtonListener = (selector, callback) => {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(button => {
        button.addEventListener('click', callback);
    });
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randInt
}

export {addButtonListener, getRandomInt};

addButtonListener("#home",()=>{
    window.location.href = "/start";
});