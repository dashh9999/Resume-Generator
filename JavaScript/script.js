// alert("loading.....");
// function addWE(){
//     // console.log("Print");
//     let newNode=document.createElement("textarea")
//     newNode.classList.add("formcontrol")
//     newNode.classList.add("waddbtn")
//     newNode.classList.add("mt-2")
//     newNode.setAttribute("rows",3)
//     newNode.setAttribute("placeholder","Enter here")

//     let before=document.getElementsById("waddbtn")
//     let after=document.getElementsById("get")

//     before.insertBefore(newNode,after)


// } 
function addWE() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let before = document.getElementById("waddbtn");
    before.parentNode.insertBefore(newNode, before);
}
function addAQ() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "aqField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let before = document.getElementById("aqbtn");
    before.parentNode.insertBefore(newNode, before);
}
function generatecv() {
    // console.log("okkkk");
    let namechange = document.getElementById("nameField").value;
    let nameput = document.getElementById("nameT");
    nameput.innerHTML = namechange;
    document.getElementById("nameT2").innerHTML = namechange;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("facebookField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkT").innerHTML = document.getElementById("linkedinField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let we=document.getElementsByClassName("weField");
    let str="";
    for(let e of we)
    {
        str= str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML =str;

    let we1=document.getElementsByClassName("aqField");
    let str1="";
    for(let e of we1)
    {
        str1= str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML =str1;

    // let aq = document.getElementsByClassName("aqField");
    // let aqList = document.getElementById("aqT");
    // aqList.innerHTML = ""; // Clear existing academic qualifications

    // let aqStr = "";
    // for (let i = 0; i < aq.length; i++) {
    //     aqStr += `<li>${aq[i].value}</li>`;
    // }
    // aqList.innerHTML = aqStr;
    document.getElementById("cv_form").style.display="none"; 
    document.getElementById("cv_template").style.display="block"; 

    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);
    reader.onloadend=function(){
        document.getElementById("imgAdd").src=reader.result;
    }
   
}

function printcv(){
    window.print();
}