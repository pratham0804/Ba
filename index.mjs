 // make sure that , for npm initializing you must be on the current working directory in the terminal , here it is npm module
 

 import chalk from 'chalk';

//  console.log(chalk.green.underline.inverse('Helloworld'));
import nodemon from 'nodemon';


 import validator from 'validator';
 const res = validator.isEmail("thapa@thapa.com");

 console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));





 // for installing module globally , we write

//  npm install nodemon -g