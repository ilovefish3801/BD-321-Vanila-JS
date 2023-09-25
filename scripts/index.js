function showPassword(TARGET) {
    const ELEMENT  = document.querySelector(TARGET)
    
    ELEMENT.setAttribute('type', 'text')
  }

  const getUserRole = (element)=>{
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute("data-role")
    // console.log(DATA)
    
    return DATA
  }

  const getLastNameUser = (element)=>{
    const VALUE = element.value
    if (VALUE.length >= 3){
        return VALUE
    } else{
        alert("Last name is to short")
        return null
    }
  }

  const getNameUser = (element)=>{
    const VALUE = element.value
    if (VALUE.length > 1){
        return VALUE
    } else{
        alert("Name is to short")
        return null
    }
  }

  
  const passwordConfirm = (element)=>{

  }




  document.addEventListener("DOMContentLoaded", ()=>{
    const CHECKBOX = document.querySelector(".form__input_checkbox")
    const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock")
    const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock")
    const LF_BLOCK = document.querySelector(".form__top_LFor")
    const SUBMIT_BTN = document.querySelector(".form__input_sumbit")
    const REGISTER_FORM = document.querySelector(".form")

    const FIRST_NAME = document.querySelector(".form__input_first_name")
    const SECOND_NAME = document.querySelector(".form__input_second_name")

    const PASSWORD = document.querySelector('.form__input_showPassword_1')

    LF_BLOCK.addEventListener("click", ()=>{
        LEFT_BLOCK.classList.toggle('active')
        RIGHT_BLOCK.classList.toggle('active')
    })

    CHECKBOX.addEventListener("click", (e)=>{
        const CHECK_BOX_VALUE = CHECKBOX.checked
        
        CHECK_BOX_VALUE ? SUBMIT_BTN.disabled = !CHECK_BOX_VALUE: SUBMIT_BTN.disabled = !CHECK_BOX_VALUE
    })

    //submiting form
    REGISTER_FORM.addEventListener("submit", (e)=>{
        e.preventDefault()
        // get data from function
        let role = getUserRole(LF_BLOCK)
        let lastUserName = getLastNameUser(SECOND_NAME)
        let userName = getNameUser(FIRST_NAME)        
        let password = passwordConfirm(PASSWORD)

        // const name = FIRST_NAME.value
        // const surname = SECOND_NAME.value

        // if (name.length < 4 || surname.length < 4){
        //     alert(`Ви повинні ввести ваше справжнє ім'я та прізвище`)
        // }else{
        //     // data frame
        //     const USER_DATA = {
        //         role,
        //         name,
        //         surname
        //     }
        //     console.log(USER_DATA)
        // }


        //data frame
        const USER_DATA = {
            role,
            lastUserName,
            userName
        }
        console.log(USER_DATA)
    })
  })

