const cambiar_label = () =>{
const select = document.querySelector("#slt_operation");

const label1 = document.querySelector("#lbl_d1");
const label2 = document.querySelector("#lbl_d2");

if(select == 0)
{
    label1.textContent = `T(ension)`;
    label2.textContent = `R(esistencia)`;
}else{
    if(select == 1)
    {
        label1.textContent = `I(ntensidad)`;
        label2.textContent = `R(esistencia)`;
    }else
    {
        label1.textContent = `T(ension)`;
        label2.textContent = `R(esistencia)`;
    }
}
   
}

const select = document.querySelector("#slt_operation");
select.addEventListener("change",cambiar_label);