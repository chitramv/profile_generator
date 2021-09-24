const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  //next question
 rl.question('What is an activity you like doing :) ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);

    //next question

    rl.question('What do you listen while doing that :) ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);

      //next question
      rl.question('Which meal is your favorite :) ', (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);

        //next question
        rl.question('Which sport is your absolute favorite :) ', (answer5) => {
        console.log(`Thank you for your valuable feedback: ${answer5}`);

         rl.close();

        });
      });



    });
  });



  //rl.close();
});


