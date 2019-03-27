Exercises
=========

Remove from cart
----------------
Add a button to remove socks from the Cart.
- Disable the button when the color is not present in the cart.


Inventory per color
-------------------
Keep track of inventory per color.
- Add to cart should only be enabled when there are socks in that color left in the inventory.


Reviews
-------
- Add validation: name is required
- Add validation: Must accept the terms
- Display all reviews already submitted


New page: Cart contents
-----------------------
Add a new router link `/cart` and... display the cart contents.
- Create a new `CartProduct` component to display the information. (with an image?)
- Add a product price.
- Allow to order more/less of a product in the Cart
- Calculate the total Cart cost. (with shipping costs?)


Vuex
----
- Put the `Product.vue` product properties in the store.
- On the main page, loop over the products and display them.
