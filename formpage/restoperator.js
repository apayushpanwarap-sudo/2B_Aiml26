function sum(...values){
    console.log(values)
}    
sum(10,20);
sum(10,100,1000);
function sum(...values){
    let total=0;
    for(let n of values){
        total+=n;
    }
    return total;
}
console.log(sum(10,20,30));
console.log(sum(10,20,30,40));