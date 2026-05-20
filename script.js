// Cart Count
console.log("JS Connected");

alert("JS Working");

let count = localStorage.getItem("cartCount") || 0;

let cartCount = document.getElementById("count");

if(cartCount){
    cartCount.innerText = count;
}


// Add To Cart

let buttons = document.querySelectorAll(".card button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        count++;

        localStorage.setItem("cartCount", count);

        if(cartCount){
            cartCount.innerText = count;
        }

        alert("Product Added To Cart");

    });

});


// Remove Cart Item

let removeBtn = document.querySelector(".remove");

if(removeBtn){

    removeBtn.addEventListener("click", function(){

        let cartItem = document.querySelector(".cart-item");

        cartItem.remove();

        alert("Item Removed");

    });

}
// Login Button

let loginBtn = document.getElementById("loginBtn");

if(loginBtn){

    loginBtn.addEventListener("click", function(){

        alert("Login Successful");

    });

}


let registerBtn = document.getElementById("registerBtn");

if(registerBtn){

    registerBtn.addEventListener("click", async function(){

        let name = document.getElementById("name").value;

        let email = document.getElementById("email").value;

        let password = document.getElementById("password").value;

        let response = await fetch("http://localhost:3001/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                name: name,
                email: email,
                password: password

            })

        });

        let data = await response.text();

        alert(data);

    });

}
let checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", async function(){

    try{

        let response = await fetch("http://localhost:3001/order", {

            method: "POST"

        });

        let data = await response.text();

        alert(data);

    }

    catch(error){

        alert("Server Error");

        console.log(error);

    }

});