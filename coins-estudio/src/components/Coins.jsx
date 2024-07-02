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
        // const {data} = await axios.get(url);
        const res = await axios.get(urlCoins);
        // const data = await res.json();
        //  console.log(data);
        setCoins(res.data);
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()) || coin.symbol.toLowerCase().includes(search.toLocaleLowerCase()));


    return (
        <div className="container">
            <h1 className="text-danger text-xl-center mt-5">API COINS</h1>
            <div className="mt-5 d-flex justify-content-center align-items-center">

                <div className="col-6">
                    <form action="">
                        <div className="input-group">
                            <span className="input-group-text">Search</span>
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
            {/* <div className="mt-5">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>Price Change</th>
                        </tr>
                    </thead>
                    <tbody>

                        {searchCoins.map(coin => (
                            <tr key={coin.id}>
                                <td  >
                                    <img className="ima-fluid" src={coin.image} style={{ width: "40px", height: "40px" }} alt="image_coin" />
                                </td>
                                <td  > {coin.name} </td>
                                <td  > {coin.symbol} </td>
                                <td  > $ {coin.current_price} </td>
                                <td className={coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"} >
                                    % {Math.round(coin.price_change_percentage_24h * 100) / 100} </td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div> */}
            {/* <div className="mt-5">
                <div className=" d-flex justify-content-center align-items-center flex-wrap"> */}


            {/*        {searchCoins.map(coin => (

                        <div key={coin.id} className="columna col-12 col-md-4">
                            <img className="ima-fluid" src={coin.image} style={{ width: "40px", height: "40px" }} alt="image_coin" />
                            <p className="coins-title">{coin.name}</p>
                            <div className="badges-contenedor">
                                <span className="badge text-bg-warning me-2"><h6>Sym</h6> {coin.symbol}</span>
                                <span className="badge text-bg-info me-2">$ {coin.current_price}</span>
                                <span className={coin.price_change_percentage_24h < 0 ? "badge text-bg-danger" : "badge text-bg-success"}>% {Math.round(coin.price_change_percentage_24h * 100) / 100}</span>
                            </div>

                        </div>
                    ))}*/}
            {/* {searchCoins.map(coin => (
                        <div key={coin.id} className="card">
                            <div className="card-header text-center">
                                {coin.name}
                            </div>
                            <div className="card-body text-center">
                                <img className="ima-fluid" src={coin.image} style={{ width: "40px", height: "40px" }} alt="image_coin" />
                                <div className="card-text">
                                    <div className="badges-contenedor">
                                        <span className="badge text-bg-warning me-2"><h6>Sym</h6> {coin.symbol}</span>
                                        <span className="badge text-bg-info me-2">$ {coin.current_price}</span>
                                        <span className={coin.price_change_percentage_24h < 0 ? "badge text-bg-danger" : "badge text-bg-success"}>% {Math.round(coin.price_change_percentage_24h * 100) / 100}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div> */}
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-2  mt-5">
            {searchCoins.map(coin => (
                <div key={coin.id} className="card p-3 bg-white">
                    <div className="about-product text-center mt-2"><img src={coin.image} style={{ width: "40px", height: "40px" }} alt="image_coin"/>
                        <div>
                            <h4>{coin.name}</h4>
                            {/* <h6 className="mt-0 text-black-50">Apple pro display XDR</h6> */}
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