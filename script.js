function bClick(val) {
    if (document.getElementById("screen").value == 0) {
        if (document.getElementById("screen").value >= 10) {} else {
            document.getElementById("screen").value = ""
            document.getElementById("screen").value += val
        }

    } else {
        document.getElementById("screen").value += val
    }

}


function backClick() {

    const display = document.getElementById('screen');
    var str = display.value
    var result = str.toString().slice(0, -1)
    display.value = result



}



function equalTo() {

    const display = document.getElementById('screen');
    if (display.value == 169) {
        display.value = 'I Love youh😚💝';

        size = document.getElementById('screen');
        size.style.fontSize = "250%";


    } else {
        if (display.value == 226) {
            display.value = 'Please wait...';

            size = document.getElementById('screen');
            size.style.fontSize = "250%";
            goPage()
        } else {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
    }

}

function clearText() {
    document.getElementById("screen").value = ""
    size = document.getElementById('screen');
    size.style.fontSize = "350%";
}

function goPage() {
    setTimeout(function () {
        window.open("secondpage.html");
    }, 3000);
}