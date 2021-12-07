#!/usr/bin/env node

const meow = require('meow');
const moveSqs = require('./move-sqs');

const cli = meow(
  `
	Usage
	  $ move-sqs <input>

	Options
	  --source-queue-url, -s  Source AWS SQS Queue URL
	  --destination-queue-url, -d  Destination AWS SQS Queue URL
	  --source-region, -sr  Source AWS Region
	  --dest-region, -dr  Dest AWS Region
	  --access-key-id, -k  AWS Access Key ID
	  --secret-access-key, -S AWS Secret Access Key
	  --merge-json-message-with, -o (OPTIONAL) Merge the json message body with a given json string 
`,
  {
    flags: {
      'source-queue-url': {
        type: 'string',
        alias: 's',
      },
      'destination-queue-url': {
        type: 'string',
        alias: 'd',
      },
      'source-region': {
        type: 'string',
        alias: 'r',
      },
      'dest-region': {
        type: 'string',
        alias: 't',
      },
      'access-key-id': {
        type: 'string',
        alias: 'k',
      },
      'secret-access-key': {
        type: 'string',
        alias: 'S',
      },
      'session-token': {
        type: 'string',
        alias: 'T',
      },
      'merge-json-message-with': {
        type: 'string',
        alias: 'm',
      },
    },
  },
);

moveSqs(cli.flags);

module.exports = cli;
