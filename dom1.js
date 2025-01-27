// let ele = document.createElement("h1");
// ele.innerText= "dynamic creation of html element";
// // ele.id = "demo"
// ele.setAttribute("id" , "demo")
// console.log(ele);

// // ele.removeAttribute("id");
// document.body.appendChild(ele);


// let image = document.createElement("img");
// image.src= "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image)


//let form = document.querySelector("form");
//let username = document.querySelector("#uName");
//let email = document.querySelector("#uMail");
//let psw = document.querySelector("#uPsw");

//form.addEventListener("submit",(event)=>{
    //event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    // console.log(username.value);
   // let name =username.value;
    //let mail = email.value;
    //let password = psw.value;
    //let userDetails={
      //  name:name,
        //mail : mail,
        //password:password
    //} ;
    // console.log(userDetails);
    //localStorage.setItem("userData" , JSON.stringify(userDetails))
//})>


// localStorage.clear()

let mainEle = document.createElement("div");
mainEle.setAttribute("id" , "mainblock");

console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class" , "topBlock");
//consoel.log(topEle);

let image = document.createElement("img");
image.src="c:\Users\srihi\Downloads\british-shorthair-7880908_1280.jpg"
image.width="300";
image.height="300";
image.style.objects="cover"

let bottomEle = document.createElement("div");
buttomEle.setAttribute("class" , "bottomElement");
//console.log(bottomEle);
let h1 = document.createElement("h1");
h1.innerTexts="CAT";

let btn = document.createElement("button");
btn.innerText="View More";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);

document.body.appendChild(mainEle)