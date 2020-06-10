var f = function f1(){
    console.log(1+1);
    console.log(1+2);
}

// console.log(f);
// f();

var a = [f];
a[0]();

// if(true){
//     console.log(1);
// }

var o = {
    func : f
}

o.func();