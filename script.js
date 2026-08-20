let arr=["Ayush",18,147,2007]
console.log(arr)
let a=new Array()
a[0]="Ayush Panwar"
a[1]=18
a[2]=2007
a[3]=147
console.log(a)
let b=new Array(1,2,3,4,5)
console.log(b)
b.pop()//remover last element from the array
console.log(b)
b.push(12)
console.log(b)
b.shift()//remove the first element from the array
console.log(b)
b.unshift(6)
console.log(b)//Add element to the first index
del=b.shift()
let c=b.slice(1,4)
console.log(c)
b.splice(1,2)
b.splice(2,2)
b.splice(2,0,6,21)//splice(starting index,no of element to delete,values to insert)
console.log(b)
