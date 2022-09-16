import Teacher, { promote } from "./teacher";

let t = new Teacher("Ben", "BSc.");
console.log(t.name); //-> Ben
console.log(t.degree); //-> BSc
t.walk(); //-> walking
t.teach(); //-> teaching

/**
 * with named imports -> import ... from
 * with default imports -> import {...} from
 */
