function validateEmail(email) {
    const atSymbolCount = email.split('@').length - 1;
    if (atSymbolCount !== 1) {
        return false;
    }
    const lastAtSymbolIndex = email.lastIndexOf('@');
    const domain = email.slice(lastAtSymbolIndex + 1);
    if (domain.indexOf('.') === -1) {
        return false;
    }
    if (email.indexOf(' ') !== -1) {
        return false;
    }
    return true;
}
function checkEmail(){
const emailValue = document.getElementById('mail').value;
var em=false;
var pa=false;
if (validateEmail(emailValue)) {
    console.log('Valid email address');
    em=true;
} else {
    document.getElementById('estatus').style.display='block';
    setTimeout( document.getElementById('estatus').innerText='invalid email entered',1000)
}
var pass1=document.getElementById('pass1').value;
var pass2=document.getElementById('pass2').value;
if(pass1==pass2)
{
    console.log('password matched')
    pa=true;
}
else{
    document.getElementById('pstatus').style.display='block';
    document.getElementById('pstatus').innerText='Password Not Matched'
}
if(pass1.length>=8)
{
    if(em&&pa)
    {
        alert('signup successfull')
        open("./login.html")
        localStorage.setItem(`${emailValue}`,`${pass2}`)
        // localStorage.setItem("password",`${pass2}`)
    }
}
else{
    document.getElementById('pstatus').style.display='block';
    document.getElementById('pstatus').innerText='Password Length is Too Short'
}
}
function openLogin(){
    open("./login.html")
}
function hideestatus()
{
    document.getElementById('estatus').style.display='none';
}
function hidepstatus()
{
    document.getElementById('pstatus').style.display='none';
}
