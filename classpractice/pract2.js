// partical 2 button
class Button extends EventEmitter{
click(){
    this.emit("click")
}
}
const Button =new Button();
Button.on("click",()=>{
    console.log("Button Clicked");

});
Button.click();