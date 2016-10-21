#!/usr/bin/env node

const Bossy = require('bossy');
const server = require('../');
const path = require('path');

var definition = {
    p: {
        description: 'server port',
        alias: 'port',
        type: 'number',
        default: 3000
    },
    d: {
        description: 'static directory',
        alias: 'directory',
        type: 'string'
    },
    h: {
        description: 'Show help',
        alias: 'help',
        type: 'boolean'
    }
};

var args = Bossy.parse(definition);

if (args instanceof Error) {
    console.error(args.message);
    return;
}

if (args.h || !args.d) {
    console.log(Bossy.usage(definition, 'hello -n <name>'));
    return;
}

let directory = path.join(process.cwd(), args.d);
let port = args.p;

server.start(directory, port, () => {
  console.log('server start');
});
