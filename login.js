function validateUser(event){
    event.preventDefault();
    var user=document.getElementById('user').value;
    var pass=document.getElementById('pass').value;
    var storedpass=localStorage.getItem(`${user}`);
    
   
    if(storedpass==pass)
    {
        document.getElementById('lstatus').style.display='block';
        document.getElementById('lstatus').style.color='Green';
        document.getElementById('lstatus').innerText="Login Successfull"
        open("../index2.html")
    }
    else{
        document.getElementById('lstatus').style.display='block';
        document.getElementById('lstatus').style.color='red';
        document.getElementById('lstatus').innerText="Incorrect user name or password"
    }
}