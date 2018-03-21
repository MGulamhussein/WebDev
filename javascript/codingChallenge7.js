function addPara (){
    var para = document.createElement("p");
    para.id = "para1";
    var node = document.createTextNode("new paragraph");
    para.appendChild(node);
 
    var element = document.getElementById("body");
    element.appendChild(para);

}

function editPara (){
    document.getElementById("para1").innerHTML = document.getElementById("text").value;
}

function removePara (){
    var paragraph = document.getElementById("para1");
    paragraph.parentNode.removeChild(paragraph);
}