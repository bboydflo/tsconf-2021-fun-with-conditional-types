interface Engineer {
    name: string;
    age: string;
    field: string
}

interface Doctor {
    name: string;
    age: string;
    speciality: string
}

function printPerson(p: Engineer | Doctor) {
    p
    if ('speciality' in p) {
        console.log(p.speciality)
    } else {
        p.field
    }
}


printPerson({
    name: "",
    age: '2',
    field: "IT"
});


printPerson({
    name: "",
    age: '2',
    speciality: "OBGYN"
});


printPerson({
    name: "",
});

export {}