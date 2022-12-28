let btnPlusAll = document.querySelectorAll('.Qte-plus');
console.log(btnPlusAll)

let btnMinusAll = document.querySelectorAll('.Qte-moins');
console.log(btnMinusAll)

var Sumtotal = document.querySelector('.Sumtotal')
console.log(Sumtotal)
console.log(Sumtotal.value)

var prix = document.querySelectorAll(".prix")
console.log(prix)

var dlt = document.querySelectorAll('.dlt')



btnPlusAll.forEach((btn) => { btn.addEventListener('click', increaseQuantity) });
btnMinusAll.forEach((btn) => { btn.addEventListener('click', decreaseQuantity) });


function increaseQuantity() {
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1;
    
        Sumtotal.value = +(Sumtotal.value) + parseInt(this.nextElementSibling.value)
    

}


function decreaseQuantity() {
    if (this.nextElementSibling.value > 0) {
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) - 1;
        Sumtotal.value = +(Sumtotal.value) -( +(this.nextElementSibling.nextElementSibling.nextElementSibling.value))
    
    }
}



function Sumtotal(elt) {
    let prix = parseInt(elt.parentElement.nextElementSibling.innerText);
    let Qte = parseInt(elt.previousElementSibling.value);
    let Sumtotal = prix * Qte;

    elt.parentElement.previousElementSibling.nextElementSibling.innerText = Sumtotal + ' DT';
}

for (let i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener('click' , ()=>{
        dlt[i].parentElement.remove()
        Sumtotal.value = +Sumtotal.value - (+Qte[i].value * (+price[i].value))
    })
    
}
