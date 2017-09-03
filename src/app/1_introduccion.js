function ciudadResidencia(person) {
    return "La ciudad de residencia es: " + person;
}
var ciudad = "Valencia";
document.getElementById("p").innerHTML = ciudadResidencia(ciudad);
