import greet from './greet.js';
// import{yo} from './yo.js';
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet  from 'figlet';

figlet ('Hello, Omar', function(err,data) {
    if (err) {
        console.log('Something went wrong.....');
        console.dir(err);
        return;
    }
    console.log(data);
});
const styledMessage = chalk.bgBlue.whiteBright(greet('Xola'))

const cowMessage = cowsay.say({
    text:'Hello World'
})
console.log(cowMessage)

// console.log(greet('Omar'))
// console.log(yo('Omar'))
// console.log (chalk.bgBlue.whiteBright(greet('Omar'))

console.log(chalk.bgBlue.whiteBright(cowsay.say({
    text:'Hello world'
})))