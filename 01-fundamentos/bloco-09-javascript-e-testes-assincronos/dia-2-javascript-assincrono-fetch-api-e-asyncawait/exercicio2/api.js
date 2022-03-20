const list = document.querySelector('#coins-list');

const fetchCoins = async () => {
    const resolve = await fetch('https://api.coincap.io/v2/assets');
    const { data } = await resolve.json();
    return data;
};

const fetchPriceBrl = async () => {
    const resolve = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json');
    const { usd: { brl } } = await resolve.json();
    return brl;
}

window.onload = async () => {
    const array = await fetchCoins();
    const priceBrl = await fetchPriceBrl();
    array.filter(({rank}) => (rank <= 10)).forEach(({name, symbol, priceUsd}) => {
        const li = document.createElement('li');
        const price = Number(priceUsd * priceBrl).toFixed(2);
        li.innerText = `${name} (${symbol}): ${price}`;
        list.appendChild(li);
    });
};