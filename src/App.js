import axios from 'axios'
import React, {useState, useEffect} from "react";
import './App.css';
import Crypto from "./Crypto";


function App() {
    const [crypto, setCrypto] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCrypto(res.data)
                console.log(res.data)
            }).catch(error => console.log(error))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filterCrypto = crypto.filter(crypto =>
        crypto.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
    <div className='crypto-app'>
      <div className='crypto-search'>
        <h1 className='crypto-text'> Search a currency</h1>
        <form>
            <input
                type='text'
                placeholder='Search'
                className='crypto-input'
                onChange={handleChange}/>
        </form>
      </div>
        {filterCrypto.map(crypto => {
            return <Crypto
                key={crypto.id}
                name={crypto.name}
                image={crypto.image}
                symbol={crypto.symbol}
                marketCap={crypto.market_cap}
                price={crypto.current_price}
                priceChange={crypto.price_change_percentage_24h}
                volume={crypto.total_volume}

            />
        })}
    </div>
  );
}

export default App;
