var objPeople = [
    {
    }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var email = document.getElementById("email").value;

    if(password == repassword)
            {   
            alert("Pomyślnie zarejestrowano!");
            console.log(username + " jest zarejestrowany!");
            return;
            }
    else
            {
                alert("Nieprawidłowe dane rejestracji!")        
            console.log("Nieprawidłowe dane rejestracji!")
            } 
        }       
    
