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
