import React from 'react'
import './Banner.css';
import { Container, Typography } from "@mui/material";
import { color } from '@mui/system';
import Carousel from './Carousel';
import Particlebg from './Particlebg';

const Banner = () => {
  return (
    <div className='banner'>
        <Particlebg />
        <Container className='bannercont'>
            <div className='tagline'>
                <Typography
                variant='h1'
                style={{
                    fontFamily: "Righteous",
                    fontWeight: "regular",
                    marginBottom: "15",
                    color: "#E7AB79",
                    paddingBottom: 23,
                    paddingTop: 25,
                }}
                >
                    Cryptaso
                </Typography>
                <Typography
                variant='subtitle1'
                style={{
                    color: "#E7AB79",
                    textTransform: "capitalize",
                    fontFamily: "Work Sans",
                    fontWeight: "regular",
                }}>
                    Your favourite Crypto Tracker
                </Typography>

            </div>
            <Carousel />
        </Container>
    </div>
  )
}

export default Banner