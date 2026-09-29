const EventEmitter = require("events");

// First EventEmitter example
const ud = new EventEmitter();

ud.on("greet", (name) => {
    console.log(`Hello there ${name}`);
});

ud.on("exit", (code) => {
    console.log(`Exiting with code ${code}`);
});

ud.emit("greet", "Ayush");
ud.emit("exit", 0);