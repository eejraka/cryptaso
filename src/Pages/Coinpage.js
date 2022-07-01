import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from '../CryptoContext';
import { SingleCoin } from "../config/api";
import { Typography, LinearProgress } from '@mui/material';

import './Coinpage.css';
import HTMLReactParser from 'html-react-parser';

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Coinpage = () => {

  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{
        width: '72%',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '25',
        color: '#E7AB79',
      }}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="150"
          style={{ marginBottom: 20, marginTop: 20 }}
        />
        <Typography variant="h3" style={{fontFamily: "Montserrat", marginBottom: 20,}}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1"
        style={{
          width: '100%',
          fontFamily: "Work Sans",
          fontWeight: 'regular',
          padding: 18,
          textAlign: 'justify',
        }}>
          {HTMLReactParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div style={{
          alignSelf: 'flex-start',
          padding: 25,
          padddingTop: 10,
          width: '100%',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{fontFamily: "Montserrat", marginBottom: 20,}}>
              Rank :
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Work Sans",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{fontFamily: "Montserrat", marginBottom: 20,}}>
              Current Price :
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Work Sans",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{fontFamily: "Montserrat", marginBottom: 20,}}>
              Market Cap :
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Work Sans",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Coinpage