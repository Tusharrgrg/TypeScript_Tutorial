const addNum = function (a:number, b : number) {
    return a+b;
}

const printNum = function(num : number) :void{
    console.log("result "+ addNum(5,9));
}

const printNum1 = function(num : number) :undefined{
    console.log("result "+ addNum(5,9));
    return
}

