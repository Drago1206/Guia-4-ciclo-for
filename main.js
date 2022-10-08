addEventListener("DOMContentLoaded",()=>{
let est=0,estu=0,enc=0,calf=0
alert(`BIENVENIDO CALIFIQUE LA COMIDA TENIENDO ENCUENTA QUE DEL 1 AL 6 ES HORRIBLE Y DEL 7 AL 10 EXCELENTE (PORFAVOR NO TIRE TAN DURO :D)`)
est=Number(prompt(`Ingrese la cantidad de personas que realizaran la encuesta: `))
document.write(`La cantidad de entrevistados ${est}<br>`)

for(let i=0;i<est;++i){
    enc=Number(prompt(`Ingrese la calificacion: `));
    if(enc>=7 && enc<= 10){
        document.write(`Es buena<br>`)
        let notam=0
        enc=notam
        estu=estu+est
        calf=calf+enc
    }
    else if(enc>0 && enc<= 6);{
        document.write(`Es horrible<br>`)
        let notamn=enc
        estu=estu+est
        calf=calf+enc
    }
    
}
let prom=(calf/estu)
document.write(`El promedio de estudiantes que realizaron la encuesta es de: ${prom}<br>`)
document.write(`La nota mayor es de: ${notam}`)
document.write(`La nota menor es de: ${notamn}`)
})