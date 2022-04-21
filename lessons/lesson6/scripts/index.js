//imports

import pets from "./objects.js"; // default import

import { utils } from "./utils.js";

// import cat from "./objects.js"; // const cat = pet ( only for default )
// import { dog, pet } from "./objects.js"; // named import
// import { pet as cat } from "./objects.js"; // const cat = pet (for named )
// import { dog as bulldog, pet as siamese } from "./objects.js"; // named import

const { log } = utils; // const log = utils.log ( destructuring )

// console.log(cat.name);
// console.log(dog.name);
// log("test", 5);
