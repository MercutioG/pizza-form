var cost = 700
var size = "12 inch "
var ingrediants = "cheese, "
var extras = ""

function finishOrder(){
    cost = 600
    ingrediants = "cheese, "
    size = "12 inch "
    extras = ""
    calcSize()
    calcCrust()
    calcToppings()
    calcDrink()
    calcExtras()

    alert("Your " + size + "pizza with " + ingrediants + "comes out to $" + ((cost-1)/100) + ". With taxes that is $" + ((Math.round((cost-1)*1.056))/100) + "." + extras)
}

function calcSize(){
    if(document.getElementById("pizza12").checked){
        cost = 600
        size = "12 inch "
    }else if(document.getElementById("pizza14").checked){
        cost = 700
        size = "14 inch "
    }else if(document.getElementById("pizza16").checked){
        cost = 800
        size = "16 inch "
    }
}

function calcCrust(){
    if(document.getElementById("stuffedCrust").checked){
        cost = cost + 100
        size = size + "stuffed crust "
    }else if(document.getElementById("deepCrust").checked){
        cost = cost + 50
        size = size + "deep dish "
    }else if(document.getElementById("thinCrust").checked){
        cost = cost + 20
        size = size + "thin crust, "
    }
}

function calcDrink(){
    if(document.getElementById("milkshake").checked){
        cost = cost + 250
        ingrediants = ingrediants + "and a milkshake, "
    }else if(document.getElementById("softDrink").checked){
        cost = cost + 200
        ingrediants = ingrediants + "and a soft drink, "
    }else if(document.getElementById("lemonade").checked){
        cost = cost + 100
        ingrediants = ingrediants + "and a lemonade, "
    }else if(document.getElementById("water").checked){
        ingrediants = ingrediants + "and a water, "
    }else{
        ingrediants = ingrediants + "and no drink, "
    }
}

function calcToppings(){
    if(document.getElementById("pepperoni").checked){
        cost = cost + 75
        ingrediants = ingrediants + "pepperoni, "
    }
    if(document.getElementById("sausage").checked){
        cost = cost + 75
        ingrediants = ingrediants + "sausage, "
    }
    if(document.getElementById("bacon").checked){
        cost = cost + 75
        ingrediants = ingrediants + "bacon, "
    }
    if(document.getElementById("ham").checked){
        cost = cost + 75
        ingrediants = ingrediants + "ham, "
    }
    if(document.getElementById("chicken").checked){
        cost = cost + 75
        ingrediants = ingrediants + "chicken, "
    }
    if(document.getElementById("bellPepper").checked){
        cost = cost + 50
        ingrediants = ingrediants + "bell pepper, "
    }
    if(document.getElementById("olive").checked){
        cost = cost + 50
        ingrediants = ingrediants + "olives, "
    }
    if(document.getElementById("mushrooms").checked){
        cost = cost + 50
        ingrediants = ingrediants + "mushrooms, "
    }
    if(document.getElementById("onion").checked){
        cost = cost + 50
        ingrediants = ingrediants + "onions, "
    }
    if(document.getElementById("pineapple").checked){
        cost = cost + 50
        ingrediants = ingrediants + "pineapples, "
    }
    if(document.getElementById("jalapeno").checked){
        cost = cost + 50
        ingrediants = ingrediants + "jalapenos, "
    }
}

function calcExtras(){
    if(document.getElementById("gluten").checked){
        cost = cost + 50
        extras = extras + " Gluten-Free."
    }
    if(document.getElementById("vegan").checked){
        cost = cost + 50
        extras = extras + " Vegan."
    }
}