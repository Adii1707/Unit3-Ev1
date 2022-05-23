let data = JSON.parse(localStorage.getItem("products"));

let all_product = document.getElementById("all_products");
       all_product.innerHTML = null;
   append()
   function append(){

      data.map(function(el,index){
       
        let div = document.createElement("div");
      let  p1 = document.createElement("p");
       p1.innerText = el.type;
      let  p2 = document.createElement("p");
        p2.innerText = el.desc;
      let  p3 = document.createElement("p");
          p3.innerText = el.price;
          let img = document.createElement("img");
          img.src = el.image;
       let btn = document.createElement("button");
       btn.innerText = "Remove";
       btn.addEventListener("click", function(){
             Remove(index);
       });
          div.append(p1,p2,p3,img,btn);
        all_product.append(div);

      });


   }
   function Remove(index){
     
    let data = JSON.parse(localStorage.getItem("products"));
    
    let newdata = data.filter(function(el,i){
        
        if(i===index){
           let Remove = JSON.parse(localStorage.getItem("Remove")) || [];
           Remove.push(el);
           localStorage.setItem("Remove", JSON.stringify(Remove));
        }
        else{
            return i!==index;
        }
           
    });
    localStorage.setItem("products",JSON.stringify(newdata));
    window.location.reload();
    
     

   }