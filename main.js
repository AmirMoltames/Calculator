let clearScreen = false;
function insert(num) {
    if (clearScreen === true) {
        clean();
        clearScreen = false;
    }
    let current = document.form.textview.value;
    current = current + num;
    document.form.textview.value = current;
}    
function clean() {
    document.form.textview.value = "";
}
function equal() {
    let result = document.form.textview.value;
    document.form.textview.value = eval(result);
   clearScreen = true;
}
