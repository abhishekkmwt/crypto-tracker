const convertObject=(obj)=>{
    return {
        id : obj.id,
        name: obj.name,
        symbol:obj.symbol,
        image:obj.image.large,
        desc:obj.description.en,
        price_change_percentage_24h:obj.market_data.price_change_percentage_24h,
        total_volume:obj.market_data.total_volume.usd,
        current_price:obj.market_data.current_price.usd,
        market_cap:obj.market_data.market_cap.usd
    }
}

export default convertObject;