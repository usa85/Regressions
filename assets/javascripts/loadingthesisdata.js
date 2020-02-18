const content = document.querySelector("#content");
const content2= document.querySelector("#content2");
const contentdetermination = document.querySelector("#determinationtable");
//const contentdeterminationvarimpacttable = document.querySelector("#varimpacttable");
const mybasepath = "assets/images/";
//const mytextbased1="assets/modeltexts/"

let basedescription= content.innerHTML;
let statdescription = content2.innerHTML;
//let regressiondescription = contentdetermination.innerHTML;

function clickfunction(id){
    content.innerHTML= myarrstatdata[id].description; 
    content2.innerHTML=myarrstatdata[id].description2;
    //contentdetermination.innerHTML=myarrstatdata[id].loadtable;
    myarrstatdata[id].constant.b;

    let picture = document.createElement("img");
    picture.src= mybasepath + mystatdata[id].constant.mypicture;
    content.appendChild(picture);
};

document.addEventListener("DOMContentLoaded", ()=>{

   let description=document.querySelector("#descriptionHeader");
    description.addEventListener('click', ()=>{
        let content = document.querySelector("#content");
        content.innerHTML=basedescription;
    });


    for (i = 0; i < myarrstatdata.length; i++) {
        let cathlist = document.querySelector("#modulelist");
        //console.log(list);
        //console.log(cenotaph2[i].name);

        let cathelement = document.createElement("li");

        cathelement.innerHTML = '<span onclick="clickfunction('+ (i) + ')"><strong>' + myarrstatdata[i].name + '</strong><i></span>';
        console.log(cathelement);


        cathlist.appendChild(cathelement);
    }
});