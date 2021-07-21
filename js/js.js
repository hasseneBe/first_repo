//----- Calcul des Totaux ------------------------------

var refrech = document.querySelector('.refrech')
refrech.addEventListener('click', () => {
    //-----Sous Total--------
    var prixTotal = document.querySelectorAll('.PrixT')
    for (let index = 0; index < prixTotal.length; index++) {
        var PrixU = document.querySelectorAll('.PrixU')[index].innerHTML
        var qty = document.querySelectorAll('.qty')[index].value;
        prixTotal[index].innerHTML = parseInt(PrixU, 10) * parseInt(qty, 10); // calcul du sous totale: prix unitaire x quantité
    } 

    //------Total panier-------
    var x = []
    for (let i = 0; i < prixTotal.length; i++) {
        x.push(parseInt(prixTotal[i].innerText, 10))
    }
    var sum = x.reduce(function (a, b) {
        return a + b;
    }, 0);
    document.querySelector('.PT').innerHTML = sum

})

//---------Modifier Quantité-----------------------------

var plus = document.querySelectorAll('.plus')
var qty_plus = document.querySelectorAll('.qty');
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
        qty_plus[i].value = parseInt(qty_plus[i].value, 10) + 1
    })
}

var minus = document.querySelectorAll('.minus')
var qty_minus = document.querySelectorAll('.qty');
for (let i = 0; i < plus.length; i++) {
    minus[i].addEventListener('click', () => {
        if (qty_minus[i].value > 0) {
            qty_minus[i].value = parseInt(qty_minus[i].value, 10) - 1
        } else {
            qty_minus[i].value = 0
        }
    })
}

//----- Bouton effacer------
var remove = document.getElementsByClassName('remove')
for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', (event) => {
        event.target.parentElement.parentElement.remove() //effacer le container (<tr> parent)
    })
}

//---------Like/dislike----------------
var like = document.querySelectorAll('.like')
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', () => {
        like[i].classList.toggle('likes')
    })
}