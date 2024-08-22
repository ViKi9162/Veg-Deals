document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart');
            // Logic to add item to the cart
        });
    });
});


// Initialization for ES Users
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Ripple });