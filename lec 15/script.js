/*
https://developer.mozilla.org/en-US/docs/Web/Events
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

/*var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("mouseenter",function () {
    console.log("mouse entered !")
})*/

























var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.getElementsByTagName("ul")[0];
console.log(button);



function inputlength(){

    if(input.value.length > 0){
        return true;
        return false;
    }
}
button.addEventListener("click",function () {

         if(inputlength > 0) {
             var li = document.createElement("li");
             li.append(document.createTextNode(input.value));
             ul.append(li);
             input.value = '';
         }
});

function createlistitem() {


}
function additemAfterclick(){
    if(inputlength()){
        createlistitem();
    }
}
function additemAfterpress(e) {
    if (inputlength() && e.which === 13)
    {
        createlistitem();
    }
}
function isdone()
{
    this.classlist.toggle("done")
}
input.addEventListener("keypress",function (e) {

    console.log(e);
    if(inputlength > 0 && e.which === 13) {
        var li = document.createElement("li");
        li.append(document.createTextNode(input.value));
        ul.append(li);
        input.value = '';
    }
});































































