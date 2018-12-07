const clickButton = document.querySelector(".clickBtn");
const list = document.querySelector(".ulList");
let numberOfNewElement = 1;

const createNewElementOfList = () => {
    const newEl = document.createElement("li");
    newEl.textContent = numberOfNewElement;

    list.appendChild(newEl);

    if (numberOfNewElement % 3 === 0) {
        newEl.classList.add("biggerFont");
    }

    numberOfNewElement += 2;
}

clickButton.addEventListener('click', createNewElementOfList);