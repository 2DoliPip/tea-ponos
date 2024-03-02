// Function to fetch cryptocurrency price in USD
async function fetchCryptoPrice(cryptoId) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
        const data = await response.json();
        const cryptoPrice = data[cryptoId].usd;
        return cryptoPrice;
    } catch (error) {
        console.log('Error fetching cryptocurrency price:', error);
    }
}

// Define the cryptocurrency ID (e.g., 'bitcoin' for Bitcoin)
const cryptoId = 'bitcoin';

// Call the function to fetch cryptocurrency price and display it
fetchCryptoPrice(cryptoId)
    .then(price => {
        console.log(`Current price of ${cryptoId.toUpperCase()} in USD: $${price}`);
    })
    .catch(error => {
        console.log('Error:', error);
    });
