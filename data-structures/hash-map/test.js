import { HashMap } from "./HashMap.js";

const test = new HashMap();

test.set("Patrick", "Patrick Star");
test.set("Patrick", "Patrick Star"); // Patrick Star is being overwritten with Patrick Star
test.set("Squidward", "Squidward");
test.set("SpongeBob", "SpongeBob SquarePants");
test.set("Mr. Krabs", "Mr. Krabs");
test.set("Plankton", "Plankton");
test.set("Sandy Cheeks", "Sandy Cheeks");
test.set("Pearl Krabs", "Pearl Krabs");

console.log(test.get("Patrick"));
console.log(test.get("1"));

console.log("Has:", test.has("1"));
console.log("Remove:", test.remove("1"));

console.log("Length:", test.length());

test.set("Test Krabs", "Test Krabs");
console.log("Keys: ", test.keys());

console.log("Values: ", test.values());

console.log("Entries: ", test.values());
