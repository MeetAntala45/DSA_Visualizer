const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
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
    push.disabled = true;
    push.classList.add("disable-button");
    pop.disabled = true;
    pop.classList.add("disable-button");
    reset.disabled = true;
    reset.classList.add("disable-button");
    input.disabled = true;
};

const popDisable =() => 
{
    pop.disabled = true ; 
    pop.classList.add("disable-button");
};
 
//for enable all buttons
const buttonEnable = () => {
    push.disabled = false;
    push.classList.remove("disable-button");
    pop.disabled = false;
    pop.classList.remove("disable-button");
    reset.disabled = false;
    reset.classList.remove("disable-button");
    input.disabled = false;
};
 
//When the push button will be clicked
push.addEventListener("click", () => {
    //if input box is empty
    if (input.value == "") {
        massage.innerHTML = "Please Enter a value.";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
 
    //if the Queue is full
    if (stack.length == 5) {
        input.value = "";
        massage.innerHTML = "Queue is Full";
        buttonEnable();
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
    const itemValue = input.value; //for store the input value
    stack.push(itemValue); //push the value into the stack
 
    //creating a new element
    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = stack[stack.length - 1];
    bucket.appendChild(element);
 
 
    input.value = "";
 
    element.classList.add("ele-add");
 
    buttonDisable();
 
    setTimeout(() => {
        element.classList.remove("ele-add");

        box[0].innerHTML = stack[stack.length - 1];
 
        box[1].innerHTML = itemValue;
 
        massage.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;
 
        buttonEnable();
    }, 1500);
});
pop.addEventListener("click", () => {
    if (stack.length == 0) {
        massageBox.classList.add("error-massage");
        massage.innerHTML = "Queue is Empty";
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
 
    bucket.firstElementChild.classList.add("ele-remove");
 
    buttonDisable();
 
    setTimeout(() => {
        const  item_pop = bucket.firstElementChild.textContent ;
        box[2].innerHTML = item_pop;
        bucket.removeChild(bucket.firstElementChild);
         
        //stack.pop();
        stack.splice(0,1);
 
        if (stack.length == 0) {
            box[0].innerHTML = "";
        } else {
            box[0].innerHTML = bucket.lastElementChild.textContent;
        }
 
        massage.innerHTML = `Item ${item_pop} is Popped.`;
 
        buttonEnable();
    }, 1500);
});
 
reset.addEventListener("click", () => {
    while (stack.length > 0) {
        stack.pop();
    }
 
    box[0].innerHTML = "";
    box[1].innerHTML = "";
    box[2].innerHTML = "";
    massage.innerHTML = "";
 
    while (bucket.lastChild) {
        bucket.removeChild(bucket.lastChild);
    }
});


const togglePopButton = () => {
    if (input.value.length !== 0) {
        pop.disabled = true;
        pop.classList.add("disable-button");
    } else {
        pop.disabled = false;
        pop.classList.remove("disable-button");
    }
};
input.addEventListener("input", togglePopButton);
