addEventListener("DOMContentLoaded",()=>{
let M=0,Tl=0
for(let i=0;i<21;i++){
    if(i==1){
        M=10
    }
    else{
        M=M*2
        Tl=Tl+M
    }
    document.write(`El pago en el mes ${i}<br>`)
    document.write(`El pago total es de: ${Tl}<br>`)
}
})