window.onload = function() {
    var onload = localStorage.getItem("first");
    document.getElementById('input1').value = onload;
}

function calc() {
    var input1 = document.getElementById('input1').value;
    alert(input1);
    
    localStorage.setItem("first", input1);
    
}