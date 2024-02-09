let addButton = document.querySelectorAll(".add");
let basket = document.querySelector(".count")
let totalPrice = document.querySelector(".totalPrice");
let detailedBasket = document.querySelector(".detailedBasket")

let myItems = []

function addItemLine (quoi, combien, prix, prixTotal) {
    let newItemLine = {
        name : quoi,
        quantity : combien,
        cost : prix,
        totCost : prixTotal, 
    }
    myItems.push(newItemLine)
    console.log(myItems);
}

function printItemLine(tab) {
    detailedBasket.innerHTML = ''
    
    // IMPORTANT !!!!! tabElement c'est le nom qu'on donne et index est généré par le tabElement choisi. du coup, dans l'innerhttml on utilisse le data-index (la position dans le tableau qui apparait dans l'inspecteur)
    tab.forEach((tabElement, index) => {
    detailedBasket.innerHTML +=
    `
    <div class="single-line" data-index="${index}"><span class="delete" style="cursor:pointer">❌</span> <span class="marchandise">[${tabElement.name}]</span> <span class="qty">${tabElement.quantity}x</span> ${tabElement.cost}€ = ${tabElement.totCost}€</div>
    `
    });
}

function calculateNbrItemsAndPrice (tab) {
    let totNbr = 0;
    let totPrice = 0;
    tab.forEach(function(tabElement) {
        totNbr += tabElement.quantity
        totPrice += tabElement.totCost
    
    })
        // for (let i = 0; i < tab.length; i++) {
        //     totNbr += tab[i].quantity;
        //     totPrice += tab[i].totCost;
        // }
    basket.innerHTML = totNbr;
    totalPrice.innerHTML = `Prix total : ${totPrice}€`;
}


function deleteLine(lineToKill) {
    myItems.splice(lineToKill, 1)
    printItemLine(myItems)
    calculateNbrItemsAndPrice(myItems)
}

addButton.forEach(element => {
    element.addEventListener('click', function() {
    //     on peut enchainer les parentElement pour remonter 2x
    //    let itemName = element.parentElement.parentElement.firstElementChild.innerHTML;
    // closest remonte et chope le premier parent qui a la classe item
    let itemName = element.closest('.item').querySelector('h2')
    // nextElementSibling cible sur la même ligne, parmis les enfants l'élément suivant
       let itemNbr = parseInt(element.nextElementSibling.value);
       let price =  parseInt(element.parentElement.previousElementSibling.innerHTML);
       let totPrice = price * itemNbr;
              
       addItemLine(itemName, itemNbr, price, totPrice);
       printItemLine(myItems);
       calculateNbrItemsAndPrice(myItems);
    })
});


detailedBasket.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
      let placeDansTableau = parseInt(e.target.parentElement.getAttribute('data-index'))
      deleteLine(placeDansTableau)
    }
  });