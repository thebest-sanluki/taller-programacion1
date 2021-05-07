const calculo_bhaskara = () => {
    const a = document.querySelector("#bkr_a").value;
    const b = document.querySelector("#bkr_b").value;
    const c = document.querySelector("#bkr_c").value;

    const parrafo1 = document.querySelector("#p_resultado_1");
    const parrafo2 = document.querySelector("#p_resultado_2");
    
    const bloque1 = (Math.pow(b,2)) - (4*c);
    
    const bloque2 = 2*a;
    
    const raiz = Math.sqrt(bloque1);
    
    const bloque3 = raiz / bloque2;
    
    const resultado1 = -b + bloque3;
    parrafo1.textContent = `
    El Resultado de X1 es: ${resultado1}
    `;  
    const resultado2 = -b - bloque3;
    parrafo2.textContent = `
    El Resultado de X2 es: ${resultado2}
    `
}

const btn_resultado = document.querySelector("#btn_result1");
btn_resultado.addEventListener("click",calculo_bhaskara);
