import { menuArray } from "./data.js"

const warenkorb = document.getElementById("bestellung")
const formContainer = document.getElementById("form-container")
const xBTN = document.getElementById("form-close-btn")



function warenkorbHTML(){

     let warenkorbArray = []
    document.addEventListener("click",function(e){
        if(e.target.dataset.addbtn){

            menuArray.forEach(function(item){
                warenkorbArray.push(item.name)
                console.log(warenkorbArray)

            warenkorb.style.display ="block"
            
            warenkorb.innerHTML += 
            `
                <div class="item-list-bestellung">
                    <ul class="orderList" >
                        <!-- Bestellung kommt hier  -->
                        <li class="item-warenkorb">
                            ${item.name}
                        </li>
                        <li>
                            <button id="removeBTN" class="removeBTN">remove</button>
                        </li>
                        <li class="item-price-warenkorb">
                        ${item.price}
                        </li>
                    </ul>
                    
                    </div>
                    <ul class="total">
                        <li class="item-warenkorb totalPriceText">
                            Total Price 
                        </li>
                        <li class="item-price-warenkorb totalPrice">
                            euro
                        </li>
                    </ul>
                    <div class="addBtnDiv">
                        <button class="orderBTN" id="orderBTN" data-orderBTN ="orderBTN" >Complete Order</button>
                    </div>
            `
            })


        }
    })
    
}

function closeBTN(){
    document.addEventListener("click", function(e){
        if(e.target.document){
            document.getElementById("form").style.display ="none"
        }
    })
}






function getMenuHTML() {
    menuArray.forEach(function(item){
        const { name, ingredients, id, price, emoji } = item;

        document.getElementById("list-container").innerHTML += `
        <section>
            <div class="item-container">
                <ul id="item-list" class="item-list" >
                    <li>
                        <div class="Item-pic-container">
                            <p class="itemPic">${emoji}</p>
                        </div>
                    </li>
                    <li>    
                        <div class="item-text">
                            <h3 class="item-name">${name}</h3>
                            <p class="zutaten">${ingredients.join(', ')}</p>
                            <h3 class="preis">${price} &#8364</h3>
                        </div>
                    </li>
                    <li>    
                        <button id="addBTN" class="addBTN" data-addbtn="${id}">+</button>
                    </li>
                </ul>
            </div>
        </section>
        `
    })
}


function renderPayment() {
    document.addEventListener("click", function(e){

        if(e.target.dataset.orderbtn){
           
            document.getElementById("form").style.display ="block"
            document.getElementById("form").innerHTML =
        `
        <div id="form">
        
                <div id="form-container" class="form-container">
                <button class="form-close-btn" id="form-close-btn" disabled>X</button>
                <h4>Enter card details</h4>
                <form class="formInputDiv" >
                    <input class="formInput" type="text" name="fullName" placeholder="Enter your name" required>
                    <input class="formInput" type="text" name="cardNumber" placeholder="Enter card number" required>
                    <input class="formInput" type="password" name="cardPin" placeholder="Enter CVV" required>
                    <button class="payBTN" type="submit" data-paybtn="" >Pay</button>
                </form>
            </div>
        </div>    
        `
        
    }

    })

    }

    

    

// Aufruf der Funktion, um das Menü zu rendern
getMenuHTML()

// Aufruf der Funktion, um Warenkorb zu rendern
warenkorbHTML()

// Aufruf der Funktion, um Payment Form zu rendern
renderPayment()

/* x von der form */
closeBTN()

