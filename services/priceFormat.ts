
const priceFormat = (currency: number) => {
    return new Intl.NumberFormat('de-DE').format(currency)
}
export default priceFormat