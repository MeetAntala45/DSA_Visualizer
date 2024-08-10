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
// console.log(box);
const stack = [];
 
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
};

const popDisable =() => 
{
    pop_back.disabled = true ; 
    pop_back.classList.add("disable-button");
    pop_front.disabled = true ; 
    pop_front.classList.add("disable-button");
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
 

    if (stack.length == 5) {
        input.value = "";
        massage.innerHTML = "Qeque is Full";
        buttonEnable();
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
    bucket.appendChild(element);
 
    // box[0].innerHTML = stack[stack.length - 1];
 
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
 

    if (stack.length == 5) {
        input.value = "";
        massage.innerHTML = "Deque is Full";
        buttonEnable();
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
    bucket.insertBefore(element,bucket.children[0]);
 
    // box[0].innerHTML = stack[stack.length - 1];
 
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


pop_front.addEventListener("click", () => {
    if (stack.length == 0) {
        massageBox.classList.add("error-massage");
        massage.innerHTML = "Deque is Empty";
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
 
    bucket.firstElementChild.classList.add("ele-remove");
 
    buttonDisable();
 
    setTimeout(() => {
        


        const  item_pop = bucket.firstElementChild.textContent ;
        box[1].innerHTML = item_pop;
        bucket.removeChild(bucket.firstElementChild);
         
        const itemValue = stack.pop();

 
        // if (stack.length == 0) {
        //     box[0].innerHTML = "";
        // } else {
        //     box[0].innerHTML = bucket.lastElementChild.textContent;
        // }
 
        massage.innerHTML = `Item ${itemValue} is Popped.`;
 
        buttonEnable();
    }, 1500);
});


pop_back.addEventListener("click", () => {
    if (stack.length == 0) {
        massageBox.classList.add("error-massage");
        massage.innerHTML = "Deque is Empty";
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
 
    bucket.lastElementChild.classList.add("ele-remove");
 
    buttonDisable();
 
    setTimeout(() => {
        


        const  item_pop = bucket.lastElementChild.textContent ;
        box[1].innerHTML = item_pop;
        bucket.removeChild(bucket.lastElementChild);
         
        const itemValue = stack.pop();

 
        // if (stack.length == 0) {
        //     box[0].innerHTML = "";
        // } else {
        //     box[0].innerHTML = bucket.lastElementChild.textContent;
        // }
 
        massage.innerHTML = `Item ${itemValue} is Popped.`;
 
        buttonEnable();
    }, 1500);
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
