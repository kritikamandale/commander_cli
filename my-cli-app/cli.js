#!/usr/bin/env node
import { Command } from 'commander'; // or require('commander') if using CommonJS

const program = new Command();

program
  .name('my-cli')
  .description('A sample CLI built with Commander.js')
  .version('1.0.0')
  .option('-d, --debug', 'enable debug output')
  .option('-f, --file <path>', 'specify input file')
  .option('-t, --timeout <sec>', 'set timeout in seconds', '60') // default value
  .option('-v, --verbose', 'verbose mode');

program
  .command('greet <name>')
  .description('Greet someone')
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

// Add any additional options only once, and avoid duplicates
program
  .option('--first')
  .option('-s, --separator <char>')
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  .option('-S, --small', 'small pizza size') // Use capital S to avoid conflict with separator
  .argument('<string>')
  .option('--float <number>', 'float argument', parseFloat) // changed from -f to --float to avoid conflict
  .option('-i, --integer <number>', 'integer argument')
  .option('--verbosity', 'verbosity that can be increased') // changed from -v to --verbosity to avoid conflict
  .option('-c, --collect <value>', 'repeatable value')
  .option('-l, --list <items>', 'comma separated list');



program.parse();

const options = program.opts();
if (options.debug) {
  console.log('Debugging is on', options);
}
