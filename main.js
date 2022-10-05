addEventListener("DOMContentLoaded",()=>{
    let N=0
    N=Number(prompt("Ingrese el numero con el que desea saber la tabla de multiplicar: "))
    let T=[1,2,3,4,5,6,7,8,9,10]
    document.write(`Tabla de multiplicar del numero ${N}<br>`)
    for (i of T) {
        document.write(`-${N} X ${i} = ${i*N}<br>`)
        
    }
})