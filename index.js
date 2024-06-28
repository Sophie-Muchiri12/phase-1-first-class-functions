function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function namedFunction(){
        console.log("I am named function")
    }
    return namedFunction
}

function returnsAnAnonymousFunction(){
     return function(){
        console.log("I am an anonymous function")
    }
}


