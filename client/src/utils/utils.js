import _ from 'lodash'

const computeQuantity = (arr, value) => {
    return arr.reduce((a, b) => (_.isEqual(b, value) ? a + 1 : a), 0)
}

const totalAmount = (uniqueProducts, activeCurrency) =>
    uniqueProducts
        .map((product) => {
        const price = product.price.filter(
            (p) => p.currency.label === activeCurrency
        );
        return price[0].amount
    })
        .reduce((a, b) => a + b, 0)
        .toFixed(2);

const taxBill = (tax, total) => ((tax/100)*total).toFixed(2)

export {computeQuantity, totalAmount, taxBill}
