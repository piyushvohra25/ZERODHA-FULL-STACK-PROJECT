function Awards() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="largestBroker" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largets stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all reatil order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%"}} alt="pressLogos" />
                </div>
            </div>
        </div>
    );
}

export default Awards;