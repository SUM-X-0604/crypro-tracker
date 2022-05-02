import React from "react";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import CoinItem from "./CoinItem";
import "./Coins.css";


const Coins = ({ coins }) => {



    return (
        <div className="container">
            <div>
                <div className="heading">
                    <p>#</p>
                    <p className="coin_name">Coin</p>
                    <p>Price</p>
                    <p>24H</p>
                    <p className="hide_mobile">Volume</p>
                    <p className="hide_mobile">Mkt Cap</p>
                </div>

                {coins.map((coins) => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} key={coins.id} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Coins;
