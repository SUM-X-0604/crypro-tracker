import React from 'react';
import './Coins.css'

const CoinItem = ({ coins }) => {
    return (
        <div className='coin_row'>
            <p>{coins.market_cap_rank}</p>
            <div className='img_symbol'>
                <img src={coins.image} alt="" />
                <p>{coins.symbol.toUpperCase()}</p>
            </div>
            <p>{coins.current_price.toLocaleString()}</p>
            <p>{coins.market_cap_change_percentage_24h}%</p>
            <p className='hide_mobile'>{coins.total_volume.toLocaleString()}</p>
            <p className='hide_mobile'>{coins.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default CoinItem