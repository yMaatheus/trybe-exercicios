const fetchCoins = async () => {
    const coins = await fetch('https://api.coincap.io/v2/assets').then(response => response.json()).then(data => console.log(data));
    return coins;
};

window.onload = () => fetchCoins();