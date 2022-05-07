let a ={
    name:"yash",
    age:32,
    student:"true",
};

let str='{"name":"yash","age":22}';

 let b =JSON.stringify(a); // stringify = Converts a JavaScript value to a JavaScript Object Notation (JSON) string. 
 console.log(b);

 let c=JSON.parse(str);  //Parse = covert JSON string into an object.
 console.log(c);