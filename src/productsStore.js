const products = [
    {
        id: 'price_1Q03cXP3NQclC9uBvw8tWUZp',
        name: 'Coffee',
        price: 4.99
    },
    {
        id: 'price_1Q03gIP3NQclC9uBTcXtJl07',
        name: 'Sunglasses',
        price: 19.99
    },
    {
        id: 'price_1Q03n4P3NQclC9uBYeOTZ47c',
        name: 'Camera',
        price: 9999.99
    }
]

function getProductData(id) {
    let productData = products.find(product => product.id === id);
    if(productData === undefined) {
        console.log('Product not found for id: ' + id);
        return undefined;
    }
    return productData;
}

export { products, getProductData };