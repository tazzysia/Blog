let username=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let cpassword=document.getElementById("cpassword");
let form=document.querySelector("form");
  
    document.querySelector("button")
      .addEventListener("click",(e)=>{
         e.preventDefault();
          validateInputs();
    });


    function validateInputs(){

        if(username.value.trim()===""){
           onError(username,"Username is required!");
        }else{
           onSuccess(username);
        }
        if(email.value.trim()===""){
            onError(email,"Email is required!");
        }else if(!isValidEmail(email.value.trim())){
                onError(email,"Email is not valid");
            }else{
                onSuccess(email);
            }
        
    
        if(password.value.trim()===""){
            onError(password,"Password is required!");
         }else if(password.value.length<8){
               onError(password,'Password must be at least 8 character.')
            }
            else{
             onSuccess(password);
         }

        if(cpassword.value.trim()===""){
            onError(cpassword,"Comfirm Password!!!");
         }else if(password.value.trim()!==cpassword.value.trim()){
                onError(cpassword,"Password & Confirm password not matching!");
            }
            else{
             onSuccess(cpassword);
            }
    } 
    
    function onSuccess(input){
        let parent=input.parentElement;
        let errorMsg=parent.querySelector("small");
        errorMsg.style.visibility="hidden"; 
        errorMsg.innerText="";
        parent.classList.remove("error");
        parent.classList.add("success");  
    }
    function onError(input,message){
        let parent=input.parentElement;
        let errorMsg=parent.querySelector("small");
        errorMsg.style.visibility="visible";
        errorMsg.innerText=message;  
        parent.classList.add("error");
        parent.classList.remove("success");
    }
    
    function isValidEmail(email){
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
     }



 



