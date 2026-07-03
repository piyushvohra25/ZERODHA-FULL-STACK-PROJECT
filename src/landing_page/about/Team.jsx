function Team () {
    return (  
        <div className="container mt-5 mb-5">
            <div className="row border-top p-5 text-center">
                <h2>People</h2>
            </div>
            <div className="row p-4 text-muted">
                <div className="col text-center ">
                    <img src="media/images/nithinKamath.jpg" style={{borderRadius:"50%", width:"50%"}} alt="nithinKamath" />
                    <h4 className="mt-5">Nithin Kamath</h4>
                    <h5>Founder, CEO</h5>
                </div>
                <div className="col fs-5 pt-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on &nbsp; <a href="" style={{textDecoration:"none"}}>Homepage</a> / 
                        &nbsp; <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / 
                        &nbsp; <a href=""  style={{textDecoration:"none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team ;