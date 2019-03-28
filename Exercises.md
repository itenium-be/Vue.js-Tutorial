Exercises
=========
[Claim an exercise](https://github.com/itenium-be/Vue.js-Tutorial/issues)


1 Remove from cart
------------------
Add a button to remove socks from the Cart.


2 Inventory per color
---------------------
Keep track of inventory per color/variant.


3 Reviews
---------
A. Add validation: Name is required. Must accept the terms.  
B. Display all reviews already submitted.  
C. Turn the rating `select` into selectable stars.  
C2. Allow for partial selection. (See Github issue for code snippets)


4 New page: Cart contents
-------------------------
A. Add a product price.  
B. Create a new `ProductLine` component to display the information. (with an image?)  
C. Add a new router link `/cart` (`router.ts`)  
D. Display the cart contents on the component of 4C.  
E. Allow to order more/less of a product in the Cart.  
F. Calculate the total Cart cost. (with shipping costs?)  


5 Vuex
------
A. Put the `Product.vue` product properties in `store.ts` in a products array.  
B. Turn product into a `@Prop() product!: any` of `Product.vue`.  
C. On the main page, loop over the products and display them.  
D. Display a list of the `ProductLine` instead and a button to go to the detail page.  
E. Create a new route to go to a `ProductDetail` page.
F. The `cart` is now defined in `Home.vue`. Should probably move this to the store aswell?  
