const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const massage = document.querySelector(".massage");
const massageBox = document.querySelector(".massage-box");
const box = document.querySelectorAll(".box");
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
 
const popEnable =() => 
{
    pop.disabled = false ; 
    pop.classList.remove("disable-button");
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
const togglePopButton = () => {
    if (input.value.length !== 0) {
        pop.disabled = true;
        pop.classList.add("disable-button");
    } else {
        pop.disabled = false;
        pop.classList.remove("disable-button");
    }
};

// Add an event listener to the input field to listen for changes
input.addEventListener("input", togglePopButton);

 
//When the push button will be clicked
push.addEventListener("click", () => {
    //if input box is empty
    if (input.value == "") {
        massage.innerHTML = "Please Enter a value.";
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
 
    //if the stack is full
    if (stack.length == 5) {
        input.value = "";
        massage.innerHTML = "Stack Overflow";
        popEnable();
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
    element.innerText = itemValue;
    bucket.appendChild(element);
 
    //clear the input box
    input.value = "";
 
    //adding the animation for a new pushed element
    element.classList.add("ele-add");
 
    //disable all buttons
    buttonDisable();
 
    //after pushing the element
    setTimeout(() => {
        //remove the animation
        element.classList.remove("ele-add");
 
        //update the top
        box[0].innerHTML = stack[stack.length - 1];

        //update the Last Pushed Item Value
        box[1].innerHTML = itemValue;
 
        //Display the massage
        massage.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;
 
        //Enable all buttons
        buttonEnable();
    }, 1500);
});
 

pop.addEventListener("click", () => {
    //if Stack is Empty
    if (stack.length == 0) {
        massageBox.classList.add("error-massage");
        massage.innerHTML = "Stack Underflow";
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }
 
    //adding the popping animation
    bucket.lastElementChild.classList.add("ele-remove");
 
    //disable all buttons
    buttonDisable();
 
    //start popping the element
    setTimeout(() => {
        //delete the element from the bucket
        bucket.removeChild(bucket.lastElementChild);
         
        //Storing the popped value
        const itemValue = stack.pop();
         
        //updating the last popped item
        box[2].innerHTML = itemValue;
 
        //updating the Top
        if (stack.length == 0) {
            box[0].innerHTML = "";
        } else {
            box[0].innerHTML = stack[stack.length - 1];
        }
 
        //adding the massage
        massage.innerHTML = `Item ${itemValue} is Popped.`;
 
        //Enable all buttons
        buttonEnable();
    }, 1500);
});
 
//When the reset button will be clicked
reset.addEventListener("click", () => {
    //clear the full array
    while (stack.length > 0) {
        stack.pop();
    }
 
    //clear all fields
    box[0].innerHTML = "";
    box[1].innerHTML = "";
    box[2].innerHTML = "";
    massage.innerHTML = "";
 
    //clear all elements from the bucket
    while (bucket.lastChild) {
        bucket.removeChild(bucket.lastChild);
    }
});



