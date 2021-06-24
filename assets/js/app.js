const productsContainer = document.getElementById('products')
const cartItem = document.getElementById('cart-item')
const productsCard = document.querySelector('.products-card')
let cartItems = []

// Product Load On UI
const productLoad = () => {
  allProducts.map((product) => {
    const productCard = `
    <div class="col-md-3">
        <div dataid=${product.id} class="products-card">
        <!-- Product Img -->
        <div class="product-img">
            <img
            src=${product.productImg}
            alt=""
            />
        </div>
        <!-- Product Content -->
        <div class="product-content inline-center">
            <h3 class="product-name">${product.productName}</h3>
            <h4 class="product-price">$${product.productPrice}</h4>
        </div>
        </div>
    </div>`
    productsContainer.insertAdjacentHTML('beforeend', productCard)
  })
}

// Cart Item load On UI

const cartLoad = () => {
  cartItems.map((product) => {
    const itemCard = `
      <div dataid=${product.id} class="cart-item w-100 inline-center">
                  <!-- Item Img -->
                  <div class="item-img">
                    <img
                      src=${product.productImg}
                      alt=""
                    />
                    <span class="item-qty">
                      1
                    </span>
                  </div>
                  <div class="cart-item-content w-100 inline-center max-dif">
                    <!-- Item Name -->
                    <h3 class="item-name">
                    ${product.productName}
                    </h3>
                    <!-- Item Price -->
                    <h3>$${product.productPrice}</h3>
                  </div>
                  <!-- Item Remove btn -->
                  <i class="fas fa-trash-alt remove-item"></i>
                </div>`
    cartItem.innerHTML += itemCard
  })
}

// Add item in Cart Array
const addToCartItem = (newCartItems) => {
  const check = cartItems.includes(newCartItems)
  if (!check) {
    cartItems.push(newCartItems)
  } else {
    alert('Product Already Added In Your Chart')
  }
}
// Remove item From Cart Array

const removeFromCartItems = (newRemoveItems) => {
  const itemIndex = cartItems.indexOf(newRemoveItems)
  cartItems.splice(itemIndex, 1)
}

// Dlt Item From Cart Item
const dltItem = (e) => {
  if (e.target.className == 'fas fa-trash-alt remove-item') {
    const removeProductId = e.target.parentElement.attributes.dataid.value
    const newRemoveItems = productIdToProduct(removeProductId)
    removeFromCartItems(newRemoveItems)
    e.target.parentElement.remove()
  }
}
// Add Items In Cart
const addItem = (e) => {
  if (e.target.className == 'products-card') {
    const crtProductId = e.target.attributes.dataid.value
    const newCartItems = productIdToProduct(crtProductId)
    addToCartItem(newCartItems)
    cartItem.innerHTML = ''
    cartLoad()
  }
  if (e.target.parentNode.parentNode.className == 'products-card') {
    const crtProductId = e.target.parentNode.parentNode.attributes.dataid.value
    const newCartItems = productIdToProduct(crtProductId)
    addToCartItem(newCartItems)
    cartItem.innerHTML = ''
    cartLoad()
  }
}

// Add Items Event
document.body.addEventListener('click', addItem)
// Remove Items Event
cartItem.addEventListener('click', dltItem)

// Find Items From Id

const productIdToProduct = (id) => {
  let selectedProduct
  allProducts.forEach((product) => {
    if (product.id == id) {
      selectedProduct = product
    }
  })
  return selectedProduct
}

// Body Load

const bodyLoad = () => {
  productLoad()
}
