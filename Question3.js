const mySetInterval = (function (){
    let idCounter = 0;

    const timers = {};

    function mySetInterval(callback, delay){
        const id = ++idCounter;

        function run(){
            timers[id] = setTimeout(()=> {
                callback();
                run();
            }, delay);
        }
        run();
        return id;
    }
    function myClearInterval(id){
        if(timers[id]){
            clearInterval(timers[id]);
            delete timers[id];
            return "Interval cleared";
        }
        return "Invalid interval ID";
    }
    return{
        mySetInterval,
        myClearInterval
    };
})();

const id = mySetInterval.mySetInterval(()=>
{
    console.log("Running....");
}, 1000);

setTimeout(()=> {
    mySetInterval.myClearInterval(id)
}, 5000);