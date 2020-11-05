const cuestionario = [
    {
        pregunta: 'Cual es tu edad?',
        tipo_respuesta: 'num',
        justificacion_ante_respuesta_invalida: 'Lamentablemente, la edad minima para donar es mayor a 18',
        validar_respuesta: function (edad) {return edad > 18}
    },
    {
        pregunta: 'Cual es tu peso?',
        tipo_respuesta: 'num',
        justificacion_ante_respuesta_invalida: 'Lamentablemente, por cuestiones de salud, el peso maximo es de 100kg',
        validar_respuesta: function (peso) {return peso < 100} 
    }
]