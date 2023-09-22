const changeBgColor = (selector, color) => {
    const element = document.querySelector(selector)
    element.style.backgroundColor = color;
}

// start point
document.addEventListener("DOMContentLoaded", ()=>{
    // get elements
    const RED_BTN = document.querySelector("#red");
    
    // add listeners
    RED_BTN.addEventListener("click", (e)=>{
        e.preventDefault();
        changeBgColor("body", "#f00");
    })
})



