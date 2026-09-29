const EventEmitter= require('events')
// here
const b= new EventEmitter();
b.on('greet',(name)=>
{
    console.log(`welcome  ${name} in class B`);
})
b.emit('greet',("Ayush"));

b.on('exit',(name)=>
{
    console.log(`welcome  ${name} in class B`);
})
b.emit('exit',("Ayush"));


