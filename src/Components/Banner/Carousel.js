import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CryptoState } from '../../CryptoContext';
import './Banner.css';
import { TrendingCoins } from '../../config/api'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Carousel = () => {
    const [trending, setTrending] = useState([])
    const { currency, symbol } = CryptoState();
    const fetchTrendingCoins =async () => {
        const { data } = await axios.get(TrendingCoins(currency));

        setTrending(data);
    };

    console.log(trending);
    useEffect(() => {
      fetchTrendingCoins();
    }, [currency]);
    
    const responsive = {
        0:{
            items: 2,
        },
        512:{
            items: 5,
        },
    };

    const items = trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >=0;

        return (
            <Link
            className='carousel-item'
            to={`/coins/${coin.id}`}
            >
                <img 
                src={coin?.image}
                alt={coin.name}
                height="75"
                style={{
                    marginBottom: 10,
                }}
                />
                <span>
                    {coin?.symbol}
                    &nbsp;
                    <span>
                    {profit && '+'} {coin.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>
                <span style={{fontSize:20, fontWeight:450, }}>
                    {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
                </span>
            </Link>
        )
    })

  return (
    <div className='carousel'>
        <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
        />
    </div>
  )
}

export default Carousel