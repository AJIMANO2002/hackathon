
let ele=document.getElementById("cont");

let nav=document.createElement("nav");
nav.className="navbar navbar-light  bg-secondary";
ele.appendChild(nav);

let fluid=document.createElement("div");
fluid.className="container";
nav.appendChild(fluid);

let a=document.createElement("a");
a.innerText="Ice and Fire API";
a.className="navbar-brand text-light";
fluid.appendChild(a);

let form=document.createElement("form");
form.className="d-flex";
fluid.appendChild(form);

let put=document.createElement("input");
put.className="form-control me-2";
put.setAttribute("type","search");
put.setAttribute("placeholder","Search");
put.setAttribute("aria-label","Search");
form.appendChild(put);

let btn=document.createElement("button");
btn.innerText="Search";
btn.className="btn btn-outline-success btn-info";
btn.setAttribute("type","submit");
form.appendChild(btn);



const url = "https://anapioficeandfire.com/api/books";

fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data);
})




