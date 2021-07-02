const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question('What do you think of Node.js? ', (answer) => {
    rl.question('Whats your name? Nicknames are also acceptable  ', (answer2) => {
    rl.question('Whats an activity you like doing?', (answer3) => {
    rl.question('What do you listen to while doing that?', (answer4) => {
          rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer5) => {
            rl.question('Whats your favourite thing to eat for that meal?', (answer6) => {      
              rl.question('Which sport is your absolute favourite?', (answer7) => {
                console.log(`${answer} loves listening to ${answer4},while${answer3},devouring ${answer} for ${answer5},prefers ${answer6} over any other sport, and is amazing at ${answer7}`);
                r1.close();
              });
            });
          });
        });
      });
    });
  });
            
    