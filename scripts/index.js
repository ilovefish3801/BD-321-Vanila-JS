function showPassword(selector) {
    const TARGET  = document.querySelector(selector)
    const TARGET_VALUE = TARGET.getAttribute('type')
    TARGET_VALUE == "password" ? TARGET.setAttribute('type', 'text') : TARGET.setAttribute('type', 'password')

  }

  const getUserRole = (element)=>{
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute("data-role")
    // console.log(DATA)
    
    return DATA
  }

  const getDataFromField = (element)=>{
    const VALUE = element.value;
    const TYPE = element.getAttribute('name')

    if(TYPE == 'second_name'){
      if(VALUE.length >= 3){
        return VALUE
      }else{
        alert("Last name is to short")
        return null
      }
    }

    return VALUE
  //   if (VALUE.length >= 3){
  //       return VALUE
  //   } else{
  //       alert("Last name is to short")
  //       return null
  //   }
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

  
  // const passwordConfirm = (element)=>{
  //   const password = element.value
  //   const confirm = document.querySelector('.form__input_showPassword_2')

  //   const confirmPassword = confirm.value

  //   if (element.value != confirm.value){
  //       // make error
  //   }
  // }




  document.addEventListener("DOMContentLoaded", ()=>{
    // read from storage
    const USER_DATA = JSON.parse(localStorage.getItem('user'))
    console.log(USER_DATA)

    const CHECKBOX = document.querySelector(".form__input_checkbox")
    const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock")
    const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock")
    const LF_BLOCK = document.querySelector(".form__top_LFor")
    const SUBMIT_BTN = document.querySelector(".form__input_sumbit")
    const REGISTER_FORM = document.querySelector(".form")

    const FIRST_NAME = document.querySelector(".form__input_first_name")
    const SECOND_NAME = document.querySelector(".form__input_second_name")
    const EMAIL = document.querySelector('.form__input_email')
    const PASSWORD = document.querySelector('.form__input_password')
    const CONFIRM_PASSWORD = document.querySelector('.form__input_password_reat')

    if(USER_DATA){
      const {userName, lastUserName, userPassword, role, userEmail} = USER_DATA
      FIRST_NAME.value = userName
      SECOND_NAME.value = lastUserName
      EMAIL.value = userEmail
    }
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
        let lastUserName = getDataFromField(SECOND_NAME)
        let userName = getDataFromField(FIRST_NAME)
        let userEmail = getDataFromField(EMAIL)
        let userPassword = getDataFromField(PASSWORD)
        let userConfirmPassword = getDataFromField(CONFIRM_PASSWORD)

        if (userConfirmPassword != userPassword){
          console.log("Passwords don't match, please enter correct password ")
          return
        }

        //data frame
        const USER_DATA = {
            role, userName, lastUserName, userEmail, userPassword
        }

        //Local Storage
        // localStorage.setItem('user', JSON.stringify(USER_DATA))
        
        //session storage
        sessionStorage.setItem('user', JSON.stringify(USER_DATA))

        // set to Cookie
        const cookieObject = JSON.stringify(USER_DATA)
        document.cookie = `user=${cookieObject}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path="/"`
        
        console.log(USER_DATA)
    })
  })

