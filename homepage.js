function openlogin(){
    open('./eCommerce/login.html')
}
function opensignup(){
    open('./eCommerce/signup.html')
}
function showprofile(){
    document.getElementById('profDet').style.display='flex';
}
 function closeall(){
     document.getElementById('profDet').style.display='none';
 }

 let ajax=new XMLHttpRequest();
 console.log(ajax)
 ajax.open("GET","https://fakestoreapi.com/products");
 ajax.send();
 ajax.onload=()=>{
    let data=JSON.parse(ajax.response);
    data.forEach(element=> {  
    })
 }
//  function openprod()
// {
//     open("./eCommerce/products.html")
// }
// function opencartpage(){
//     open("./eCommerce/cart.html")
// }
function joinmail(){
    var inmail=document.getElementById('newsmail').value;
    localStorage.setItem("mail",inmail)
    setTimeout(()=>{
        document.getElementById('newsmail').type="mail";
        document.getElementById('newsmail').value=""; 
    },1500)
    document.getElementById('newsmail').type="button";
        document.getElementById('newsmail').value="SUBSCRIBED";
}