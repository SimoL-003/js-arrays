const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers (provate a trovare i metodi e poi provate ad implementare la soluzione con il ciclo for)

// const reversedTeachers = teachers.slice().reverse();
// console.log(reversedTeachers);

const reversedTeachers = teachers.slice()

for (let i = 0; i < reversedTeachers.length; i++) {
    let teacher = reversedTeachers.shift();
    reversedTeachers.splice(reversedTeachers.length - i, 0, teacher);
}
console.log(teachers);
console.log(reversedTeachers)


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = null;

// 3. Rimuovi 'Ed' dall'array teachers (fatelo con un metodo e poi provate a farlo anche con il ciclo for)

// Conoscendo la posizione di Ed all'interno dell'array:
// teachers.splice(1, 1); 
// console.log(teachers);

for (let i = 0; i < teachers.length; i++) {
    if (teachers[i] === "Ed") {
        teachers.splice(i, 1);
    }
}
console.log(teachers);