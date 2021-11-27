if(document.readyState=="loading"){
    document.addEventListener('DOMContentLoaded',ready)

}
else{
    ready()
}
function ready(){
    var removeCartItemButtons=document.getElementsByClassName("far fa-window-close")
    for(var i=0;i<removeCartItemButtons.length; i++){
    
        var button=removeCartItemButtons[i];
        button.addEventListener('click',removeCartItem)

    }

    const checkoutbtn=document.getElementById("orderbtn")
    checkoutbtn.addEventListener('click',()=>{
        console.log("ji")
    })


    var quantityInputs=document.getElementsByClassName("cart-quantity")
    for(var i=0;i<quantityInputs.length; i++){
        var input=quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }

   var addtoCartButton=document.getElementsByClassName("cart-btn")
    for(var i=0;i<addtoCartButton.length; i++){
        var button=addtoCartButton[i]
        button.addEventListener("click",addtocart)
    }
}

function quantityChanged(event){
      var input=event.target
     if(isNaN(input.value)||input.value<=0){
         input.value=1
     }
     updateCartTotal()


}

function removeCartItem(event){
  
    var buttonClikced=event.target
    buttonClikced.parentElement.parentElement.parentElement.remove()
    updateCartTotal()

}

function addtocart(event){
    var button=event.target
    button.innerHTML='<i class="fas fa-check"></i> Added'
    //var shopItem=button.parentElement
    //var title=shopItem.getElementsByClassName("itemTitle")[0].innerText
    //var price=shopItem.getElementsByClassName("product-price")[0].innerText
    //var image=shopItem.getElementsByTagName("img")[0].src
    

   // addItemToCart(title)
}
/*
function addItemToCart(title){
    var cartRow=document.createElement('div')
    cartRow.innerText=title
    var cartItem=document.getElementsByClassName("product-total")[0]
    console.log(cartItem)

    

}*/


function updateCartTotal(){
   //take all the left item in cart
    var cartItemContainer=document.getElementsByClassName("cart-table")[0]
console.log(cartItemContainer)
    //set the left over cart items in collection
    var cartRows=cartItemContainer.getElementsByClassName("table-body-row")

    console.log(cartRows)

    //total to count 
    var total=0

    //loop in the items in cart
    for(var i=0;i<cartRows.length;i++){
        var cartRow=cartRows[i]
        console.log(cartRow)
        //row of the carts
        var priceElement=cartRow.getElementsByClassName('product-price')[0]
        console.log(priceElement)
    
        //input rows
        var quantityElement=cartRow.getElementsByClassName('cart-quantity')[0]

        console.log(quantityElement)
        //input values
        var quantity=quantityElement.value
        console.log(quantity)
        //price of product
        var price=parseFloat(priceElement.innerText.replace('rs',''))
      
        console.log
        //update the price with quatity
        cartRow.getElementsByClassName('product-total')[0].innerHTML=quantity*price

        total=total+(price*quantity)

        
    }
    total=Math.round(total*100)/100
    document.getElementsByClassName('subtotal')[0].innerHTML=total
    document.getElementsByClassName('total')[0].innerHTML=total
}



