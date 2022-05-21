# YAPG

Yet another password generator. 
Utility with zero dependencies to generate strong passwords

## Installation

###### NPM
`npm install --save @zyxer/yapg`

###### Yarn
`yarn add @zyxer/yapg`

## Example

It's very easy!

```javascript
import { Generator } from '@zyxer/yapg';
const pg = new Generator();
console.log(pg.generate()); // Output "hEg5-RJvb-ZBcF"
```

By default **yapg** doesn't require any options. But it's possible to pass options object to
customize password.

```javascript
import { Generator } from '@zyxer/yapg';
const pg = new Generator({
  numbers: true,
  uppercase: true,
  lowercase: true,
  symbols: false, // Disable symbols
  length: 10,
  group: 0
});
console.log(pg.generate()); // Output "hEg5RJvbZB"
```
