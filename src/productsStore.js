const products = [
    {
        id: 'price_1Q0efbP3NQclC9uBV1o5zTBl',
        name: 'Coffee',
        price: 20.99
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