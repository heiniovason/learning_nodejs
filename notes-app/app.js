const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customise app version with yargs. Default value is '1.0.0'.
//yargs.version('1.0.1')

yargs.command({
    command: 'add',
    describe: 'Adding note',
    builder: { 
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log(chalk.green('Adding note:', argv.title))
        console.log(chalk.green('Body:', argv.body))
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing note',
    handler: function() {
        console.log(chalk.red('Removing note!'))
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads note',
    handler: function() {
        console.log(chalk.green('Reading note!'))
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists notes',
    handler: function() {
        console.log(chalk.green('Listing files!'))
    }
})


yargs.parse()
