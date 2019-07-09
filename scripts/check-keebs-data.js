const Ajv = require('ajv');
const ajv = new Ajv();
const validate = ajv.compile(require('./schema/keebs-data-schema.json'));

const keebData = require('../src/data/keyboards.json');
const errors = [];
for (const k of keebData) {
  const valid = validate(k);
  if (!valid) {
    errors.push(`[KEYBOARDS] ERROR name:${k.name} owner:${k.owner} not valid`);
    console.log(validate.errors);
  }
}
if (errors.length > 0) {
  for (const e of errors) {
    console.log(e);
  }
  throw 'errors in the keyboards data';
} else {
  console.log('Keyboards data are ok!');
}
