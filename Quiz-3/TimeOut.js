const foo = () => {

  setTimeout(() => {

    console.log('Callback..');

  }, 1000);

}



const asyncFoo = async () => {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Hey!');

  console.log('there');

}



const tempserver = async () => {

 console.log('check..');

 return Math.random() > 1;

}


const asyncInterval = async (callback, ms, triesLeft = 3) => {

 return new Promise((resolve, reject) => {

  const interval = setInterval(async () => {

   if (await callback()) {

    resolve();

    clearInterval(interval);

   }



else if (triesLeft <= 1) {

    reject();

    clearInterval(interval);

   }

   triesLeft--;

  }, ms);

 });

}

const main = async () => {

 try {

  await asyncInterval(tempserver, 1000);

 } catch (e) {

  console.log('error fix');

 }

 console.log("Finish");

}

main();
