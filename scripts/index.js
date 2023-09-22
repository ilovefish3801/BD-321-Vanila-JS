const changeBgColor = (selector, color) => {
    const element = document.querySelector(selector)
    element.style.backgroundColor = color;
}

// start point
document.addEventListener("DOMContentLoaded", ()=>{
    // get elements
    const RED_BTN = document.querySelector("#red");
    // const NAME = document.querySelectorAll(".form__name")
    // const NAME = document.getElementsByClassName("form__name")[0]
    const FORM = document.querySelector(".form")
    
    
    // add listeners
    // NAME.addEventListener("change", (e)=>{
    //     const USER_NAME = e.target.value;
    // })
    FORM.addEventListener("submit", (e)=>{
        e.preventDefault();
        // get elements
        const NAME = document.querySelector(".form__name");
        const USER_NAME = NAME.value;
        console.log(USER_NAME)

    })
    // RED_BTN.addEventListener("click", (e)=>{
    //     e.preventDefault();
    //     changeBgColor("body", "#f00");
    // })
})



