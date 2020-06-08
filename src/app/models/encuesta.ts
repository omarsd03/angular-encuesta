export class Encuesta {

    constructor(_id = '', 
                sgi = '', 
                primerPregunta = '', 
                segundaPregunta = '', 
                tercerPregunta = '', 
                cuartaPregunta = '', 
                quintaPregunta = '') {
        this._id = _id;
        this.sgi = sgi;
        this.primerPregunta = primerPregunta;
        this.segundaPregunta = segundaPregunta;
        this.tercerPregunta = tercerPregunta;
        this.cuartaPregunta = cuartaPregunta;
        this.quintaPregunta = quintaPregunta;
    }

    _id: string;
    sgi: string;
    primerPregunta: string;
    segundaPregunta: string;
    tercerPregunta: string;
    cuartaPregunta: string;
    quintaPregunta: string;

}
