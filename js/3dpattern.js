// take pattern number from input
let go = document.querySelector('#goBtn');
go.addEventListener('click', patternNumber);



function patternNumber(){
    let pNum = document.querySelector('#pattrnNum').value;
    if (pNum > 15 || pNum < 1) {
        alert("The pattern #" + pNum + " is not available");
    } else {
        let img = document.querySelector('#pic');
        img.src = `img/3D/0${pNum}.gif`;
    }
}