
// ? Note: Every page that has a floating cart menu will need this js file

"use strict";
(function() {

  window.addEventListener('load', init);

  function init() {
    isCartEmpty();
  }

  /**
   * Fetches the cookie and returns a boolean stating whether the cookie
   * is empty or not.
   * @returns {boolean}
   */
  function isCookieEmpty() {
    // cart_info will be undefined if it's empty, which returns false;
    let cart_info = Cookies.get('cart_info');
    if (!cart_info) return true;
    let cartJson = JSON.parse(cart_info);
    return Object.keys(cartJson).length === 0;
  }

  /**
     * Checks if the shopping_cart array has any items. If so, the floating
     * shopping cart will display a red dot.
     */
  function isCartEmpty() {
    let shoppingCarts = qsa('#checkout');
    let imgResource = '';
    let alt = 'Shopping cart, status: empty';
    if (isCookieEmpty()) {
      imgResource = 'img/cart.png';
    } else {
      imgResource = 'img/active_cart.png';
      alt = 'Shopping cart, status: There are items in your shopping cart'
    }
    shoppingCarts.forEach(cart => {
      cart.src = imgResource;
      cart.alt = alt;
    });
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

//   /**
//  * Handles the "Checkout" behavior when the user adds items to the cart and
//  * clicks the shopping cart logo to checkout.
//  */
//   function checkOut() {
//     let checkOutBtn = id('checkout');
//     checkOutBtn.addEventListener('click', () => {
//       window.location.href = 'checkout.html';
//     });
//   }

})();