async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// const buttonDisable =() => 
// {
//     sort.disabled = true ; 
//     sort.classList.add("disable-button");
// };
async function bubbleSort() {
//     let a=1;
//     if(a==1)
//     {
//         buttonDisable();
//     }
    const inputElement = document.getElementById('array-input');
    const arrayContainer = document.getElementById('array-container');
    const massage = document.querySelector('.massage');
    const massageBox = document.querySelector('.massage-box');

    const inputArray = inputElement.value.split(',').map(item => parseInt(item.trim()));
    const n = inputArray.length;

    for (const item of inputArray) {
        const divElement = document.createElement('div');
        divElement.innerText = item;
        divElement.className = 'array-element';
        arrayContainer.appendChild(divElement);
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            const element1 = arrayContainer.children[j];
            const element2 = arrayContainer.children[j + 1];

            element1.style.backgroundColor = 'black';
            element2.style.backgroundColor = 'black';

            await sleep(2000);

            if (inputArray[j] > inputArray[j + 1]) {
                const temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;

                arrayContainer.insertBefore(element2, element1);
            }

            element1.style.backgroundColor = 'rgb(49, 172, 188)';
            element2.style.backgroundColor = 'rgb(49, 172, 188)';
        }
    }

    await sleep(2000);

    massage.innerHTML = 'Sorting is completed !';
    massageBox.classList.add('success-massage');
}


