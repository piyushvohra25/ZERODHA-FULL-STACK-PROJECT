function Hero () {
    return (  
        <div className="container text-center">
            <div className="row mt-5 border-bottom">
                <h1>Charges</h1>
                <h4 className="mt-3 mb-5 text-muted">List of all charges and taxes</h4>
            </div>

            <div className="row mt-5 text-center">
                <div className="col-4 p-5">
                    <img src="media/images/pricing0.svg" alt="pricing0" />
                    <h2 className="fs-3">Free equity delivery</h2>
                    <p className="mt-4 text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg" alt="intradayTrades" />
                    <h2 className="fs-3">Intraday and F&O trades</h2>
                    <p className="mt-4 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className="col-4 p-5">
                    <img src="media/images/pricing0.svg" alt="pricing0" />
                    <h2 className="fs-3">Free direct MF</h2>
                    <p className="mt-4 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero ;