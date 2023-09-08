function bClick(val){
    if(document.getElementById("screenText").value==0){
        document.getElementById("screenText").value=""
        document.getElementById("screenText").value+=val
    }else{
        document.getElementById("screenText").value+=val
    }
    
}  




function equalTo(){
    var text = document.getElementById("screenText").value
        var result = eval(text)
        document.getElementById("screenText").value = result
}

function clearText(){
    document.getElementById("screenText").value="0"
}