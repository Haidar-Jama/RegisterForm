
function saveData(){
     let name,email,password, Con_Pass ;
     name = document.getElementById("Name").value;
     email = document.getElementById("Email").value;
     password = document.getElementById("pass").value;
     Con_Pass = document.getElementById("Con_Pass").value;


    let user_Record =   new Array();
    user_Record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    

    if(user_Record.some((v)=>{
     return v.name == name 
    })){

     alert("all ready registered ")
     
     
    } else if(name == "" ||  email =="" || password =="" ||   Con_Pass == "" ){

     swal("oppps.....", " please fill correctly ", "error");
     
    }  else if(password !== Con_Pass ){

     alert("  Please Confirm The password")
     
    }  else if(!email.includes("@gmail.com") ){

     alert("  Invalid email address")
     
    } 
    else {
      user_Record.push({
          "name":name,
          "email":email,
          "password":password,
          "Con_Pass":Con_Pass
         })
         
     //     window.location.href = "./login.html";
     // //     window.location.href='./login.html';
     // //     window.open('login.html', '_blank');
         window.open('login.html');
    }
    
     
     localStorage.setItem("users",JSON.stringify(user_Record))
     
     
}





