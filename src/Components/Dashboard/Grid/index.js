import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Grid = ({ coin, key ,delay}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        key={key}
        className={
          coin.price_change_percentage_24h > 0 ? "grid-flex" : "grid-flex-red"
        }
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="img-name">
          <img src={coin.image} alt={coin.id} />
          <div className="symbol-name">
            <h3>{coin.symbol}-USD</h3>
            <h5>{coin.name}</h5>
          </div>
        </div>
        <div className="price_change_percentage_24h">
          <h5
            className={
              coin.price_change_percentage_24h > 0
                ? "price_change_percentage_24h-green"
                : "price_change_percentage_24h-red"
            }
          >
            {coin.price_change_percentage_24h > 0 && <span>+</span>}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </h5>
          <div
            className={
              coin.price_change_percentage_24h > 0 ? "icon-green" : "icon-red"
            }
          >
            {coin.price_change_percentage_24h > 0 ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </div>
        </div>
        <div
          className={
            coin.price_change_percentage_24h > 0 ? "price-green" : "price-red"
          }
        >
          ${coin.current_price.toLocaleString()}
        </div>
        <div className="volume-marketcap">
          <p>
            Total Volume : <span>${coin.total_volume.toLocaleString()}</span>
          </p>
          <p>
            Market Cap : <span>${coin.market_cap.toLocaleString()}</span>
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Grid;
