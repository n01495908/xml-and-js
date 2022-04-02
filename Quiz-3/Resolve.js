 var promiseCheck = new Promise((resolve,reject) => {

   reject(new Error("Error"));
    
    });
    
    promiseCheck.value(value => {
    
    console.log(value); 
    
    },reason=> {
    
    console.error("Setoff error or rejection") 
    
    });
   