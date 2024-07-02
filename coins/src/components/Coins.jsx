import { useEffect, useState } from "react"
import axios from "axios";


const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        getCoins();
    }, []);

    const getCoins = async () => {

        const urlCoins = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
        const res = await axios.get(urlCoins);
        setCoins(res.data);
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()) || coin.symbol.toLowerCase().includes(search.toLocaleLowerCase()));


    return (
        <div className="container">
            <h1 className="text-danger fw-bold text-center mt-5">API COINS</h1>
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <div className="col-6">
                    <form action="">
                        <div className="input-group">
                            <span className="input-group-text bg-danger bg-opacity-75">Search</span>
                            <input
                                type="text"
                                className="form-control"
                                autoFocus
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-2  mt-5">
            {searchCoins.map(coin => (
                <div key={coin.id} className="card p-3 bg-white">
                    <div className="about-product text-center mt-2"><img src={coin.image} style={{ width: "40px", height: "40px" }} alt="image_coin"/>
                        <div>
                            <h4 className="fw-bold">{coin.name}</h4>
                        </div>
                    </div>
                    <div className="stats mt-2">
                        <div className="d-flex justify-content-between p-price"><span className="fw-bold text-primary">Symbol</span><span className="text-primary">{coin.symbol}</span></div>
                        <div className="d-flex justify-content-between p-price"><span className="fw-bold text-info">Current Price</span><span className="fw-normal text-info">$ {coin.current_price}</span></div>
                        <div className="d-flex justify-content-between p-price "><span className={coin.price_change_percentage_24h < 0 ? "badge text-bg-danger" : "badge text-bg-success"}>Price Cahnge Percentage</span><span>% {coin.price_change_percentage_24h}</span></div>
                    </div>
                    
                </div>
                ))}
            </div>
        </div>
    )
}
export default Coins