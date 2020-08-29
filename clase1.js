console.log('Hello world JS');
var name;
name = 'Mely';
var age = 22;
console.log(`Hola ${name} tienes ${age} años`);
console.log('\nhola ' + name + 'tienes ' + age )
var uppercaseName = name.toUpperCase();

console.log(`${uppercaseName.charAt(uppercaseName.length-1)}`)

var person ={
    name : 'Mel',
    age : 22,
    last : 'yesi'
}

function impr (person){
    console.log(person.name.toUpperCase())
}

impr(person)

function imprim ({name }){
    console.log(name.toUpperCase())
}
imprim(person)


function impri (name){
    console.log(name.toUpperCase());
}

impri(person.name);
