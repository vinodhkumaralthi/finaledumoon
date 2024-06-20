function showcart(){
    var id= localStorage.getItem(1);
    console.log(id)
   let one=document.getElementById("container");
// ajax-async js and xml
// texhniq to send request to backend/server.
// xmlhttpreq-broser object(to send req from browser to server)
let ajax=new XMLHttpRequest();
console.log(ajax);

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
var arr=[];
for(i=0;i<id.length;i++)
{
    arr.push(parseInt(id[i]));
}

display(data,arr,one)

}
}
function display(data,di,one){
    data.forEach(element => {
        for(i=0;i<di.length;i++){
        var ele=di[i];
            if(element.id==di[i])
            {
                one.innerHTML +=`<div class="prod">
       <img src=${element.image} alt="loading"/ class="items">
       <div class="title"><p> ${element.title}</p></div>
       <p class="price">Price : ${element.price}Rs</p>
       <div class="ratingcon">
       <p class="rating">${element.rating.rate}⭐</p></div>
       <div class="buy"><input type="button" value="Buy Now" onclick="buy(${element.id})" class="buynow"></div>
       </div>` 
            }
        }
    }
        )
       
    }
var prod=[];
    function buy(id){
    prod.push(id)
    localStorage.setItem(2,prod)
    open('./buy.html')
    }


