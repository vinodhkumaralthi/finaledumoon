// var addtocart=document.querySelectorAll(".addtocart");
// function inc()
// {
   
//     setTimeout(cartani(),1000);
//     var cartval=document.getElementById("cartVal").value;
//     console.log(cartval)
//     document.getElementById("cartVal").value=Number(cartval)+1;
//     setTimeout(remcartani(),1000);
   
// }

let one=document.getElementById("container");
// ajax-async js and xml
// texhniq to send request to backend/server.
// xmlhttpreq-broser object(to send req from browser to server)
let ajax=new XMLHttpRequest();

// creating path to backend
ajax.open("GET","https://fakestoreapi.com/products");

// sending req
ajax.send();

// on-load(using the data in frontend)

ajax.onload=()=>{
    
    let data=JSON.parse(ajax.response);
//     data.forEach(element => {
//         // document.write(element.title +"<br>")
// });

display(data)
}
let dat="";
function display(data){
    console.log(data)
    dat=data;
    
    data.forEach(element => {
       one.innerHTML += `<div class="prod">
       <img src=${element.image} alt="loading"/ class="items">
       <div class="title"><p> ${element.title}</p></div>
       <p class="price">Price : ${element.price}Rs</p>
       <div class="ratingcon">
       <p class="rating">${element.rating.rate}⭐</p></div>
       <div class="addtocart"><input type="button" value="Add To Cart" onclick="opencart(${element.id});inc()" class="addcart">
       <input type="button" value="remove" onclick="removecart(${element.id});dec()" id="rem${element.id}" class="removecart">
       </div>
       </div>`
   });
}
console.log(dat)
// <input type="button" value="remove" onclick="removecart(${element.id});dec()" id="rem${element.id}" class="removecart">
var arr=[];
 

function opencart(id)
{
    id=Number(id);
    arr.push(id)
    localStorage.setItem(1,arr);
  //removeButton();
  //updateCartButton();
    
}
function gotocart(){
    open("./cart.html")
}
function inc() {
    cartani();
    var cartval = document.getElementById("cartVal").value;
    document.getElementById("cartVal").value = Number(cartval) + 1;
    setTimeout(remcartani, 500);
}

function cartani() {
    document.getElementById('cartCon').classList.add("cartAnimation");
    document.getElementById('gif').style.display='block';
    document.getElementById('in').style.display='block';
    document.getElementById('in').classList.add("intextani");  
}
function remcartani() {
    document.getElementById('in').style.display='none';
    setTimeout( document.getElementById('cartCon').classList.remove("cartAnimation") ,500);
    document.getElementById('gif').style.display='none'; 
    document.getElementById('in').classList.remove("intextani");
}
// function dec() {
//     setTimeout(function () {
//         cartani();
//         var cartval = document.getElementById("cartVal").value;
//         document.getElementById("cartVal").value = Number(cartval) - 1;
//         setTimeout(remcartani, 500); 
//     }, 10);
// }
// function removeIdFromArray(arr,id){
//     var index = arr.indexOf(id);
//     index !== -1 && arr.splice(index, 1);
//     localStorage.setItem(1,arr)
// }
// function removecart(id){
//     var index = arr.indexOf(id);
//      index !== -1 && arr.splice(index, 1);
//      localStorage.setItem(1,arr)
//      removeButton();
//      updateCartButton();
// }
// function getUniqueElements(arr) {
//      return [...new Set(arr)];
// }
// function removeButton(){
//     var uniqueArray=getUniqueElements(arr)
//     localStorage.setItem('uniq',uniqueArray)
//  }
// function updateCartButton(){
//     var data=dat;

//     var uniqueitems=localStorage.getItem('uniq');
//     for(i=0;i<uniqueitems.length;i++)
//     {
//         data.forEach(element => {
//             if(element.id==i)
//             {
//                 document.getElementById(`rem${uniqueitems[i]}`).style.display='block';
//             }
//             else{
//                 document.getElementById(`rem${uniqueitems[i]}`).style.display='none';
//             }
//         })
//     }
// }


















































































// function dec() {
//     setTimeout(function () {
//         cartani();
//         var cartval = document.getElementById("cartVal").value;
//         document.getElementById("cartVal").value = Number(cartval) - 1;
//         setTimeout(remcartani, 500); 
//     }, 10);
// }
// function removecart(id){
//     removeIdFromArray(arr, id);
//     removeButton();
//     updateRemoveButton();
// }   
// function removeIdFromArray(arr,id) {
   
//     var index = arr.indexOf(id);
//     index !== -1 && arr.splice(index, 1);
//     localStorage.setItem(1,arr)
// }
// function getUniqueElements(arr) {
//     return [...new Set(arr)];
// }
// //Updating Remove Button
// function removeButton(){
//     var arr=localStorage.getItem(1)
//     var uniqueArray = getUniqueElements(arr);
//     localStorage.setItem('uniq',uniqueArray)
// }
// function updateRemoveButton(){

//     var uniqueitems=localStorage.getItem('uniq');
  
//     for(j=0;j<uniqueitems.length;j++)
//     {
//         console.log(j)
//         console.log(document.getElementById(`rem${uniqueitems[j]}`))//Why null Value Coming
//         for(i=1;i<=20;i++){
//         if(i==uniqueitems[j])
//         {
//             document.getElementById(`rem${uniqueitems[j]}`).style.display='block';
//         }
//         else{
//             if(uniqueitems[j]!=null){
//                  document.getElementById(`rem${i}}`).style.display='none';
//             }
//         }
//     }
//     }

    
// }
  
    
    
