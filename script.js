const products = [
  { 
    id: 1, 
    name: 'Product 1',  
    description: 'A great product!', 
    price: 25.00, 
    image: 'https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959' 
  },
  { 
    id: 2, 
    name: 'Product 2', 
    description: 'Another fantastic product!', 
    price: 30.00, 
    image: 'https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959' 
  },
  { 
    id: 3, 
    name: 'Product 3', 
    description: 'Another fantastic product!', 
    price: 30.00, 
    image: 'https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959' 
  },
  { 
    id: 4, 
    name: 'Product 4', 
    description: 'Another fantastic product!', 
    price: 30.00, 
    image: 'https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959' 
  },
  { 
    id: 5, 
    name: 'Product 5',  
    description: 'A great product!', 
    price: 25.00, 
    image: 'https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959' 
  },
  { 
    id: 6, 
    name: 'Product 6', 
    description: 'Another fantastic product!', 
    price: 30.00, 
    image: 'https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959' 
  },
  { 
    id: 7, 
    name: 'Product 7', 
    description: 'Another fantastic product!', 
    price: 30.00, 
    image: 'https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959' 
  },
  { 
    id: 8, 
    name: 'Product 8', 
    description: 'Another fantastic product!', 
    price: 30.00, 
    image: 'https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959' 
  },
    ];

    
    function renderProductList() {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
      });
    }
    
    function renderCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartSection = document.getElementById('cart');
      cartSection.innerHTML = '';
      cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="removeFromCart(${product.id})">Remove from Cart</button>
        `;
        cartSection.appendChild(cartItemDiv);
      });
    }
    
    function addToCart(productId) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const productExists = cart.find(item => item.id === productId);
      if (productExists) {
        productExists.quantity += 1;
      } else {
        cart.push({ id: productId, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
    
    function removeFromCart(productId) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart = cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
    
    document.addEventListener('DOMContentLoaded', () => {
      if (document.getElementById('product-list')) {
        renderProductList();
      }
      if (document.getElementById('cart')) {
        renderCart();
      }
    });
    

