// Parametro de funciones y retornar un tipo de dato //

function suma(a : number, b : number): number{
    return a + b
};

function isTrue(a: number, b: number): boolean | string {
    if(a > b) {
        true
    } else {
        return "a es menor que b"
    }
};

function sayHello(name: string): void {
    console.log("Hola" + name)
};

// Interfaces //
interface IUsuarios {
    id: number;
    name: string;
    email: String;
    phone?: Number
}

const usuario1: IUsuarios {
    id: 1,
    name: "Juan Nicolás García Guarín",
    email: "jungarciagu@unal.edu.co"
}

// Types //

