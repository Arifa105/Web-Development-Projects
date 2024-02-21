// let div = document.querySelector("div");
// let ul= document.querySelector("ul");
// let lis= document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");

// });
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ulwas clicked");


// });

// for (li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
    });

    ul.addEventListener("click", function(event){
        // console.log(event.target);
        if(event.target.nodeName == "BUTTON"){
            let listItem = event.target.parentElement;
            listItem.remove();
            console.log("deleted");
        }
     
        //console.log("button clicked");

    });

    // let delBtns = document.querySelectorAll(".delete");
    // for(delBtn of delBtns){
    //     delBtn.addEventListener("click", function(){
    //        // let par = delBtn.parentElement;
    //         let par = this.parentElement;
    //         console.log(par);
    //         par.remove();

      // });

   //   }