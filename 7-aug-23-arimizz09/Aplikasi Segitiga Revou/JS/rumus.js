// javascript
const inputField = document.getElementById("tinggi-input");
const button = Document.getElementById("btn_luas")

inputField.addEventListener('input', function(){ 
    const inputValue = inputField.value

    if (inputValidation(inputValue)){
       console.log("Sukses")
       button.disabled
    } else {
        console.log("Fail")
        alert("Not Valid")
        button.disabled = true
    }
    })

function inputValidation(input){
    const integerRegex = /^?\d+$/;
    return integerRegex.test(input)
}

function luas() {
    var h = parseInt(document.getElementById('h').value);
    var a = parseInt(document.getElementById('a').value);
    
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);
 
    console.log(typeof(luas));
    var luas =  h * a / 2

    document.getElementById("luas").value= luas
}