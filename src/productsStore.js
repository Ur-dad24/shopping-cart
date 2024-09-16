const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300
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