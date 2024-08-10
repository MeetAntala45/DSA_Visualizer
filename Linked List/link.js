const push_back = document.querySelector(".push_back");
const pop_back = document.querySelector(".pop_back");
const push_front = document.querySelector(".push_front");
const pop_front = document.querySelector(".pop_front");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const massage = document.querySelector(".massage");
const massageBox = document.querySelector(".massage-box");
const box = document.querySelectorAll(".box");
const size = document.querySelector(".size");
const input1 = document.querySelector('.text1');
const i_before = document.querySelector('.i_before');
const i_after = document.querySelector('.i_after');
const delete_ = document.querySelector('.delete_');
const delete_p = document.querySelector('.delete_p');
const delete_n = document.querySelector('.delete_n');
// console.log(box);
let stack = [];


//for disable all buttons
const buttonDisable = () => {
    push_back.disabled = true;
    push_back.classList.add("disable-button");
    pop_back.disabled = true;
    pop_back.classList.add("disable-button");
    push_front.disabled = true;
    push_front.classList.add("disable-button");
    pop_front.disabled = true;
    pop_front.classList.add("disable-button");
    reset.disabled = true;
    reset.classList.add("disable-button");
    input.disabled = true;
    input1.disabled = true;
    i_before.disabled = true;
    i_before.classList.add("disable-button");
    i_after.disabled = true;
    i_after.classList.add("disable-button");
    delete_.disabled = true;
    delete_.classList.add("disable-button");
    delete_p.disabled = true;
    delete_p.classList.add("disable-button");
    delete_n.disabled = true;
    delete_n.classList.add("disable-button");
};

const popDisable = () => {
    pop_back.disabled = true;
    pop_back.classList.add("disable-button");
    pop_front.disabled = true;
    pop_front.classList.add("disable-button");
    input1.disabled = true;
    i_before.disabled = true;
    i_before.classList.add("disable-button");
    i_after.disabled = true;
    i_after.classList.add("disable-button");
    delete_.disabled = true;
    delete_.classList.add("disable-button");
    delete_p.disabled = true;
    delete_p.classList.add("disable-button");
    delete_n.disabled = true;
    delete_n.classList.add("disable-button");
};


const popEnable = () => {
    pop_back.disabled = false;
    pop_back.classList.remove("disable-button");
    pop_front.disabled = false;
    pop_front.classList.remove("disable-button");
    input1.disabled = false;
    i_before.disabled = false;
    i_before.classList.remove("disable-button");
    i_after.disabled = false;
    i_after.classList.remove("disable-button");
    delete_.disabled = false;
    delete_.classList.remove("disable-button");
    delete_p.disabled = false;
    delete_p.classList.remove("disable-button");
    delete_n.disabled = false;
    delete_n.classList.remove("disable-button");
};

//for enable all buttons
const buttonEnable = () => {
    push_back.disabled = false;
    push_back.classList.remove("disable-button");
    pop_back.disabled = false;
    pop_back.classList.remove("disable-button");
    push_front.disabled = false;
    push_front.classList.remove("disable-button");
    pop_front.disabled = false;
    pop_front.classList.remove("disable-button");
    reset.disabled = false;
    reset.classList.remove("disable-button");
    input.disabled = false;
    input1.disabled = false;
    i_before.disabled = false;
    i_before.classList.remove("disable-button");
    i_after.disabled = false;
    i_after.classList.remove("disable-button");
    delete_.disabled = false;
    delete_.classList.remove("disable-button");
    delete_p.disabled = false;
    delete_p.classList.remove("disable-button");
    delete_n.disabled = false;
    delete_n.classList.remove("disable-button");

};

push_back.addEventListener("click", () => {

    if (input.value == "") {
        massage.innerHTML = "Please Enter a value.";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    const itemValue = input.value;
    stack.push(itemValue);


    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = stack[stack.length - 1];

    let img = document.createElement('img');
    img.classList.add('img');
    img.src = "arrow.png";
    if (bucket.children[0] != null || bucket.children[0] != undefined) {
        bucket.append(img);
    }

    bucket.appendChild(element);
    input.value = "";
    element.classList.add("ele-add");
    buttonDisable();

    setTimeout(() => {
        element.classList.remove("ele-add");

        box[0].innerHTML = itemValue;

        massage.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;

        buttonEnable();
    }, 1500);


});

push_front.addEventListener("click", () => {

    if (input.value == "") {
        massage.innerHTML = "Please Enter a value.";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
    const itemValue = input.value;
    let arr = [...stack];
    stack = [input.value, ...arr];


    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = stack[0];

    let img = document.createElement('img');
    img.classList.add('img');
    img.src = "arrow.png";
    if (bucket.children[0] != null || bucket.children[0] != undefined) {
        bucket.insertBefore(img, bucket.children[0]);

    }
    bucket.insertBefore(element, bucket.children[0]);
    input.value = "";

    element.classList.add("ele-add");

    buttonDisable();

    setTimeout(() => {
        element.classList.remove("ele-add");

        box[0].innerHTML = itemValue;

        massage.innerHTML = `Item ${stack[0]} is Pushed.`;

        buttonEnable();
    }, 1500);

});


pop_front.addEventListener("click", () => {
    if (stack.length == 0) {
        massageBox.classList.add("error-massage");
        massage.innerHTML = "Linked List Underflow";
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    bucket.firstElementChild.classList.add("ele-remove");

    buttonDisable();

    setTimeout(() => {
        const item_pop = bucket.firstElementChild.textContent;
        box[1].innerHTML = item_pop;
        bucket.removeChild(bucket.firstElementChild);
        if (bucket.firstChild !== null) {
            bucket.removeChild(bucket.firstElementChild);
        }
        const itemValue = stack.pop();
        massage.innerHTML = `Item ${itemValue} is Popped.`;
        buttonEnable();
    }, 1500);

    buttonEnable();
});


pop_back.addEventListener("click", () => {
    if (stack.length == 0) {
        massageBox.classList.add("error-massage");
        massage.innerHTML = "Linked List Underflow";
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    bucket.lastElementChild.classList.add("ele-remove");

    buttonDisable();

    setTimeout(() => {
        const item_pop = bucket.lastElementChild.textContent;
        box[1].innerHTML = item_pop;
        bucket.removeChild(bucket.lastElementChild);
        if (bucket.lastChild !== null) {
            bucket.removeChild(bucket.lastElementChild);
        }
        const itemValue = stack.splice(0, 1);
        massage.innerHTML = `Item ${itemValue} is Popped.`;
        buttonEnable();
    }, 1500);
    popEnable();
});

reset.addEventListener("click", () => {
    while (stack.length > 0) {
        stack.pop();
    }

    box[0].innerHTML = "";
    box[1].innerHTML = "";
    // box[2].innerHTML = "";
    massage.innerHTML = "";

    while (bucket.lastChild) {
        bucket.removeChild(bucket.lastChild);
    }
});





i_before.addEventListener("click", () => {

    const itemValue = input.value;
    const itemValue1 = input1.value;
    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = itemValue;
    let img = document.createElement('img');
    img.classList.add('img');
    img.src = "arrow.png";
    let index = stack.indexOf(itemValue1);
    if (index == -1) {
        massage.innerHTML = "Given node not present";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    stack.splice(index, 0, itemValue);
    if (index == 0) {



        if (bucket.children[0] != null || bucket.children[0] != undefined) {
            bucket.insertBefore(img, bucket.children[0]);

        }
        bucket.insertBefore(element, bucket.children[0]);
    }

    else {

        bucket.insertBefore(element, bucket.children[2 * index - 1]);
        bucket.insertBefore(img, bucket.children[2 * index - 1]);


    }

    input1.value = "";

    element.classList.add("ele-add");

    buttonDisable();

    setTimeout(() => {
        element.classList.remove("ele-add");

        box[0].innerHTML = itemValue;

        massage.innerHTML = `Item ${itemValue} is Pushed.`;

        buttonEnable();
    }, 1500);


});

i_after.addEventListener("click", () => {

    const itemValue = input.value;
    const itemValue1 = input1.value;
    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = itemValue;
    let img = document.createElement('img');
    img.classList.add('img');
    img.src = "arrow.png";
    let index = stack.indexOf(itemValue1);
    if (index == -1) {
        massage.innerHTML = "Given node not present";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    stack.splice(index + 1, 0, itemValue);
    if (index == stack.length - 1) {



        if (bucket.children[0] != null || bucket.children[0] != undefined) {
            bucket.appendChild(img, bucket.children[0]);

        }
        bucket.appendChild(element, bucket.children[0]);
    }

    else {

        bucket.insertBefore(element, bucket.children[2 * index + 1]);
        bucket.insertBefore(img, bucket.children[2 * index + 1]);


    }

    input1.value = "";
    input.value = "";

    element.classList.add("ele-add");

    buttonDisable();

    setTimeout(() => {
        element.classList.remove("ele-add");

        box[0].innerHTML = itemValue;

        massage.innerHTML = `Item ${itemValue} is Pushed.`;

        buttonEnable();
    }, 1500);


});

delete_.addEventListener("click", () => {
    const itemValue1 = input1.value;
    let index = stack.indexOf(itemValue1);
    if (index == -1) {
        massage.innerHTML = "Given node not present";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    stack.splice(index, 1);

    if (index == 0) {
        bucket.firstElementChild.classList.add("ele-remove");
        buttonDisable();
        setTimeout(() => {
            const item_pop = bucket.firstElementChild.textContent;
            box[1].innerHTML = item_pop;
            bucket.removeChild(bucket.firstElementChild);
            if (bucket.firstChild !== null) {
                bucket.removeChild(bucket.firstElementChild);
            }
            // const itemValue = stack.pop();
            massage.innerHTML = `Item ${itemValue1} is Popped.`;
            buttonEnable();
        }, 1500);

        buttonEnable();

        return;
    }

    else {
        bucket.children[2 * index].classList.add("ele-remove");
        buttonDisable();
        setTimeout(() => {
            const item_pop = bucket.children[2 * index].textContent;
            box[1].innerHTML = item_pop;
            bucket.removeChild(bucket.children[2 * index]);
            if (bucket.lastChild !== null) {
                bucket.removeChild(bucket.children[2 * index - 1]);
            }
            // const itemValue = stack.pop();
            massage.innerHTML = `Item ${itemValue1} is Popped.`;
            buttonEnable();
        }, 1500);
        buttonEnable();
        return;
    }

});


delete_p.addEventListener("click", () => {
    const itemValue1 = input1.value;
    let index = stack.indexOf(itemValue1);
    if (index == -1) {
        massage.innerHTML = "Given node not present";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    stack.splice(index, 1);

    if (index == 0) {
        massage.innerHTML = "Operation can't be performed";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    else {
        bucket.children[2 * index - 2].classList.add("ele-remove");
        buttonDisable();
        setTimeout(() => {
            const item_pop = bucket.children[2 * index-1].textContent;
            box[1].innerHTML = item_pop;
            bucket.removeChild(bucket.children[2 * index-1]);
            if (bucket.lastChild !== null) {
                bucket.removeChild(bucket.children[2 * index - 1-1]);
            }
            // const itemValue = stack.pop();
            massage.innerHTML = `Item ${itemValue1} is Popped.`;
            buttonEnable();
        }, 1500);
        buttonEnable();
        return;
    }

});


delete_n.addEventListener("click", () => {
    const itemValue1 = input1.value;
    let index = stack.indexOf(itemValue1);
    if (index == -1) {
        massage.innerHTML = "Given node not present";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
    if (index === stack.length-1) {
        massage.innerHTML = "Operation can't be performed";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    else {
        stack.splice(index+1, 1);
        bucket.children[2 * index + 2].classList.add("ele-remove");
        buttonDisable();
        setTimeout(() => {
            const item_pop = bucket.children[2 * index+1].textContent;
            box[1].innerHTML = item_pop;
            bucket.removeChild(bucket.children[2 * index+1]);
            if (bucket.lastChild !== null) {
                bucket.removeChild(bucket.children[2 * index +1]);
            }
            // const itemValue = stack.pop();
            massage.innerHTML = `Item ${itemValue1} is Popped.`;
            buttonEnable();
        }, 1500);
        buttonEnable();
        return;
    }

});

console.log(stack);

const togglePopButton = () => {
    if (input.value.length !== 0) {
        pop_back.disabled = true;
        pop_back.classList.add("disable-button");
        pop_front.disabled = true;
        pop_front.classList.add("disable-button");
    } else {
        pop_back.disabled = false;
        pop_back.classList.remove("disable-button");
        pop_front.disabled = false;
        pop_front.classList.remove("disable-button");
    }
};
input.addEventListener("input", togglePopButton);