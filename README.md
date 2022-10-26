# YAPG

Yet another password generator. 
Utility with zero dependencies to generate strong passwords

## Installation

###### NPM
`npm install --save @zyxer/yapg`

###### Yarn
`yarn add @zyxer/yapg`

## Examples

By default **yapg** doesn't require any options.

```javascript
import Generator from '@zyxer/yapg';
const pg = new Generator();
console.log(pg.generate()); // Output "hEg5-RJvb-ZBcF"
```

However, it's possible to pass options object to customize password.

```javascript
import Generator from '@zyxer/yapg';
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

## Options

| Name      | Type    | Default | Description                                                                                                                                               |
|-----------|---------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| numbers   | boolean | `true`  | Enable/disable numbers (`0-9`)                                                                                                                            |
| uppercase | boolean | `true`  | Enable/disable uppercase (`A-Z`)                                                                                                                          |
| lowercase | boolean | `true`  | Enable/disable lowercase (`a-z`)                                                                                                                          |
| symbols   | boolean | `false` | Enable/disable symbols (`!"#$%&'()*+,:;<=>?@^_{}~`)                                                                                                       |
| length    | integer | `12`    | Password length (does not take into account split into groups)                                                                                            |
| group     | string  | `4`     | Split the received password into groups using dash character (If 0 then there is no division into groups, otherwise this is the number of characters in the group) |

## License
[MIT LICENSE](https://github.com/imzyxer/yapg/blob/master/LICENSE)
