console.log("Hello, World!");

const StockXAPI = require('stockx-api');
const stockX = new StockXAPI();

stockX.fetchProductDetails('https://stockx.com/adidas-yeezy-boost-700-magnet')
.then((product) => {
    console.log(product)
    console.log("SUCCESS")
})
.catch(err => console.log(`Error fetching: ${err.message}`))

// stockX.newSearchProducts('yeezy', {
//     limit: 5
// })
// .then((products) => {
//     console.log(products)
// })
// .catch(err => console.log(`Error searching: ${err.message}`))