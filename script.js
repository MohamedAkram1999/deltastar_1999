var r31 = document.getElementById('r31')
var r12 = document.getElementById('r12')
var r23 = document.getElementById('r23')

function calc(){
    
    var r1 = (r12.value * r31.value)/(parseInt(r12.value) + parseInt(r23.value) + parseInt(r31.value)); 
    var r2 = (r23.value * r12.value)/(parseInt(r12.value) + parseInt(r23.value) + parseInt(r31.value));
    var r3 = (r31.value * r23.value)/(parseInt(r12.value) + parseInt(r23.value) + parseInt(r31.value));
    console.log(r1)
    document.getElementById('r1').innerHTML = r1;
    document.getElementById('r2').innerHTML = r2;
    document.getElementById('r3').innerHTML = r3;
}