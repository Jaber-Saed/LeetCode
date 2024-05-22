//Create Hello World Function

function createHelloWorld(){
    return function(){
        return "Hello World";
    }
}

const f = createHelloWorld();
console.log(f());