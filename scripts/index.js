//store the products array in localstorage as "products"
let form = document.getElementById("products").addEventListener("submit", display);

function pro(t,d,p,i){
    this.type =t;
    this.desc =d;
    this.price=p;
    this.image=i;

}


function display(){
    event.preventDefault();

    let type = products.type.value;
    let desc = products.desc.value;
    let price = products.price.value;
    let image = products.image.value;

    p1 = new pro(type,desc,price,image);

   let data = JSON.parse(localStorage.getItem("products")) || [];
   
   data.push(p1);

   localStorage.setItem("products", JSON.stringify(data));

}