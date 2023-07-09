async function getCurrency() {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");

    const data = await response.json();

    // console.log(data.Valute.USD.Value.toFixed(2));
    // console.log(data.Valute.EUR.Value.toFixed(2));
    // console.log(data.Valute.KZT.Value.toFixed(2));

    const usdValue = data.Valute.USD.Value.toFixed(2);
    const euroValue = data.Valute.EUR.Value.toFixed(2);
    const tengeValue = data.Valute.KZT.Value.toFixed(2);

    const usd = document.querySelector("#usd");
    const euro = document.querySelector("#euro");
    const tenge = document.querySelector("#tenge");

    usd.innerText = usdValue;
    euro.innerText = euroValue;
    tenge.innerText = tengeValue;
}

getCurrency();
