function runSequential(task, delay){
    return new Promise(async(resolve, reject)=>{
        const results = [];

        function wait(ms){
            return new Promise(res =>
                setTimeout(res, ms)
            );
        }
        try{
            for (let i = 0; i < tasks.length; i++){
                const result = await tasks[i]();
                results.push(result);

                if(i < tasks.length - 1){
                    await wait(delay);
                }
            }
            resolve(results);
        }catch(error){
            reject(error);
        }
    });
}

const tasks = [
    async () => {
        console.log("Task 1");
        return "Result 1";
    },
    async () => {
        console.log("Task 2");
        return "Result 2";
    },
    async () => {
        console.log("Task 3");
        return "Result 3";
    }
];

runSequential(tasks, 1000)
.then(results => console.log("All done:", results))
.catch(err => console.log("Stopped due to error:", err));