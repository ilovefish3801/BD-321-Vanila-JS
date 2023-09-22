const changeBgColor = (selector, color) => {
    const element = document.querySelector(selector)
    element.style.backgroundColor = color;
}

// start point
document.addEventListener("DOMContentLoaded", () => {
    // get elements
    const RED_BTN = document.querySelector("#red");
    // const NAME = document.querySelectorAll(".form__name")
    // const NAME = document.getElementsByClassName("form__name")[0]
    const FORM = document.querySelector(".form")
    const SHOW_ELEMENT_BTN = document.querySelector(".show__element")


    // add listeners
    // NAME.addEventListener("change", (e)=>{
    //     const USER_NAME = e.target.value;
    // })
    FORM.addEventListener("submit", (e) => {
        e.preventDefault();
        // get elements
        const NAME = document.querySelector(".form__name");
        const COLOR = document.getElementById("form__color");
        // get value
        const USER_NAME = NAME.value;
        const USER_COLOR = COLOR.value;
        // display result
        changeBgColor("body", USER_COLOR)

        // clear form
        NAME.value = "";

        // display status request


    })
    // RED_BTN.addEventListener("click", (e)=>{
    //     e.preventDefault();
    //     changeBgColor("body", "#f00");
    // })
    SHOW_ELEMENT_BTN.addEventListener("click", (e) => {
        // generate html
        let html = `
            <h1>Test Insert Element</h1>
            <div class="conntent__area_box">
                test
            </div>
        `
        // get insert area
        const AREA = document.querySelector('.conntent__area')
        // put html in area
        AREA.innerHTML = html;
    })
})



