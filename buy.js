function finalbuy(){

    var id= localStorage.getItem(2);
    console.log(id)
let ajax=new XMLHttpRequest();
console.log(ajax);

ajax.open("GET","https://fakestoreapi.com/products");


ajax.send();

ajax.onload=()=>{
    let data=JSON.parse(ajax.response);

var arr=[];
for(i=0;i<id.length;i++)
{
    arr.push(parseInt(id[i]));
}
console.log(arr)
display(data,arr)


}
}
var pri=10;
function display(data,di){
    data.forEach(element => {
        for(i=0;i<di.length;i++){
           
        var ele=di[i];
            if(element.id==di[i])
            {
                document.getElementById('pimage').src=element.image;
                document.getElementById('title').innerText=element.title;
                document.getElementById('price').value=`${element.price}`;
                pri=element.price;
            }
        }
    }
        )
       
    }
    function orderplaced(){
        var add=document.getElementById('address').value;
        localStorage.setItem("Address",add)
        alert("Order placed");

        open("./cart.html")
    }

    function inc(){
        var ct= document.getElementById("count").value;
        var co=document.getElementById('price').value;
        if(ct>=5)
        {
            alert("You Cant Buy More Than 5 Of Same Product")
            document.getElementById("count").value=5;
        }
         else{
       document.getElementById("count").value=Number(ct)+1; 
       document.getElementById('price').value=Number(co)+Number(pri);
    }
}
    function dec(){
       var ct= document.getElementById("count").value;
       if(ct>1)
       {
        document.getElementById("count").value=Number(ct)-1;
        var co=document.getElementById('price').value;
        document.getElementById('price').value=Number(co)-Number(pri);
       }
       else if(ct==1)
       {
        document.getElementById('price').value=0;
        document.getElementById("count").value=Number(ct)-1;
        alert(`All Products Removed
        Go Back To Cart`)
        open("./cart.html")
       }
       else{
        document.getElementById("count").value=0;
       }

    }
    // var prod=localStorage.getItem(2).split(',')
    // var image=prod[0];
    // var price=prod[1];
    // var title=prod[2];

    // document.getElementById('pimage').src=image;
    // document.getElementById('title').innerText=title;
    // document.getElementById('title').value=price;