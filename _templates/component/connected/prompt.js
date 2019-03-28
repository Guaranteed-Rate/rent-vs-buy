
// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
//
// and for examples for prompts:
// https://github.com/SBoudrias/Inquirer.js/tree/master/examples
module.exports = [
  {
    type: 'input',
    name: 'folder',
    message: 'Where does it belong (folder)',
  },
  {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
  },
]
