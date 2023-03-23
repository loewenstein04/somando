const somar = document.getElementById('somar');
somar.addEventListener('click', ()=>{
    let v1 = document.getElementById('valor1');
    let v2 = document.querySelector('input#valor2');
    let resp = document.getElementById('resposta');

    somar.style.scale = '.8'
    
    let n1 = Number(v1.value);
    let n2 = Number(v2.value);
    let resultado = n1 + n2;

    resp.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${resultado}.`

    function btnSomar(){
        somar.style.scale = '1'
    } setTimeout(btnSomar, 250)
})