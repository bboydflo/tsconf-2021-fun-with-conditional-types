export {}

type Doctor = { type: "d", name: string; specialty: string }
type Engineer = { type: "e", name: string; field: string }
type Student = { type: "s", name: string; university: string }

let obj = { name: "John", specialty: "", field: "" };
let doctor: Doctor = { name: "John", specialty: "", field: "" };
let engineer: Engineer = { name: "John", specialty: "", field: "" };
let person: Student | Doctor | Engineer = 
    Math.random() > 0.5 ? { type: "e", name: "John", field: "" }:
    Math.random() > 0.5 ? { type: "s", name: "John", university: "" }:
    { type: "d", name: "John", specialty: "" };


if (person.type === "e") {
    person
} else {
    person
}


switch (person.type) {
    case "d" : person; break;
    case "e" : person; break;
    default:
        assertNever(person);
}

function assertNever(v: never) {
    throw new Error("Not supposed to happen");
}
