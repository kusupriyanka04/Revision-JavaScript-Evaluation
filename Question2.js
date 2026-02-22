function createRateLimiter(limit, interval){
    let callCount = 0;
    let timer = null;

    function resetCounter(){
        callCount = 0;
    }
    return function (){
        if (callCount < limit){
            callCount++;
            if(!timer){
                timer = setTimeout(()=> {
                    resetCounter();
                    timer = null;

                }, interval);
            }
            return "call allowed";
        }else{
            return "Rate limit exceeded. Try again later.";
        }
    };
}

const limiter = createRateLimiter(3, 5000);

console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());