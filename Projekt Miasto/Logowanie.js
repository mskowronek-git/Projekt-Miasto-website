var objPeople = [
    {
        username: "Admin",
        password: "ProjektMiasto"
    }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(var i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username
            && password == objPeople[i].password){
                alert("Pomyślnie zalogowano!");
                console.log(username + " jest zalogowany!");
                return;
            }
        }
            alert("Nieprawidłowe dane logowania!")        
            console.log("Nieprawidłowe dane logowania!")        
    
}