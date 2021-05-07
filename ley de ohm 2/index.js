
const calcular = () => {
    const select = document.querySelector("#slt_operation").value;

    const input1 = document.querySelector("#inp_d1").value;
    const input2 = document.querySelector("#inp_d2").value;
    
    const parrafo = document.querySelector("#p_descipcion");

    if(select == 0)
    {
        const intensidad = input1 / input2;
        parrafo.textContent = `
        El resultado en I = ${intensidad}
        `;
    }
    else
    {
        if(select == 1)
        {
        const tension = input1 * input2;
        parrafo.textContent = `
        El resultado en T = ${tension}
        `;
        }
        else
        {
            const resistencia = input1 / input2;
            parrafo.textContent = `
            El resultado en R = ${resistencia}
            `;
        }
    }
}

//const select = document.querySelector("#slt_operation");

//select.addEvenlistener("change",calcular);

const btn_calcular = document.querySelector("#btn_calcular");
btn_calcular.addEventListener("click",calcular);

