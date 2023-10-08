// union operator to use more then one type operator

// this is called type alias as we can create our own types
type combine = number | string 

let dummy = function(a:combine , b : combine) {
    if(typeof a === "number" && b === "number"){
        return a+b;
    }else{
        return a.toString() + b.toString();
    }
}

console.log(dummy("tushar", 5));

