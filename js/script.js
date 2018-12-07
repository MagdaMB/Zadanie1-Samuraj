const clickButton = document.querySelector(".clickBtn");
let numberOfNewElement = 0;

clickButton.addEventListener('click', () => {

    const newElement = document.createElement("div");
    newElement.textContent = ++numberOfNewElement;

    document.body.appendChild(newElement);

    if (numberOfNewElement % 5 === 0) {
        newElement.classList.add("circleBox");
    }

})

// const addElement = function () {
//     const newElement = document.createElement("div");
//     newElement.textContent = ++numberOfNewElement;

//     document.body.appendChild(newElement);

//     if (numberOfNewElement % 5 === 0) {
//         newElement.classList.add("circleBox");
//     }
// }
// clickButton.addEventListener('click', addElement);