import React from "react";
import './Crypto.css'

const Crypto = ({cryptoName,image,symbol,price,volume, priceChange, marketCap}) => {
    return(
        <div className='crypto-container'>
          <div className="crypto-row">
          <div className="crypto">
              <img src={image} alt="crypto"/>
              <h1>{cryptoName}</h1>
                <p className="crypto-symbol">{symbol}</p>
          </div>
              <div className="crypto-data">
                  <p className="crypto-price">${price}</p>
                  <p className="crypto-volume">${volume.toLocaleString()}</p>
                  {priceChange < 0  ? (
                      <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
                  ) :( <p className="crypto-percent green">{priceChange.toFixed(2)}%</p>
                  )}
                  <p className="crypto-marketCap"> Mkth cap: ${marketCap.toLocaleString()}</p>
              </div>
          </div>
        </div>
    )
}
export default Crypto