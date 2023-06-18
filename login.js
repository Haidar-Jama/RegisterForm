const welcomeMsg= document.querySelector(".welcomeMsg");
const userbtn =document.querySelector(".userbtn")


let get =localStorage.getItem("CurrentName")                          
   
     console.log(get)
    
    welcomeMsg.innerHTML += `<h1 class="titleTex"> Welcome ${get} <br> Thanks for your visit to our Platform ✌️❤️ </h1>`;




function saveData(){
     let name, password ;
     name = document.getElementById("Name").value;
     password = document.getElementById("pass").value;
    

    let user_Record =   new Array();
    user_Record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_Record.some((v) => {
     return v.name == name && v.password == password 
    }))
    {
        swal("Good job!", "Welcome with open hands!", "success");
     let currentUser = user_Record.filter((v)=>{
        return v.name == name && v.password == password;
        
        
     })[0] 
    //  window.location.href = 'userpage.html';
      window.open('userpage.html');
      localStorage.setItem("CurrentName", currentUser.name);
      localStorage.setItem("password", currentUser.password);

                       
      // titleTex.textContent += Users.name;  

    
     
    } else  {
        alert("Your are not registered")

    }

  
   
};



