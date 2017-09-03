function ciudadResidencia(person: string):string {
    return "La ciudad de residencia es: " + person;
}

var ciudad:string = "Valencia";

document.getElementById("p").innerHTML = ciudadResidencia(ciudad);
