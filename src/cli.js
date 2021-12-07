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
	  --source_region, -sr  AWS Region
	  --dest_region, -dr  AWS Region
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
        alias: 'sr',
      },
      'dest-region': {
        type: 'string',
        alias: 'dr',
      },
      'access-key-id': {
        type: 'string',
        alias: 'k',
      },
      'secret-access-key': {
        type: 'string',
        alias: 'S',
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
