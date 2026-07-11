function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p className="text-muted mt-3 fs-5">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="row me-3 mt-5" style={{display:"flex", justifyContent:"center", alignContent:"center"}}> 
                    <div className="col-4 p-2">
                        <img src="media/images/zerodhaFundhouse.png" style={{width:"70%"}} alt="" />
                        <p className="text-small text-muted mt-3 p-2">Our assessment management venture that is creating simple and transparent index funds to help you save for your goals.</p>  
                    </div>

                    <div className="col-4 p-2">
                        <img src="media/images/sensibullLogo.svg" style={{width:"70%", paddingTop:"2rem"}} alt="" />
                        <p className="text-small text-muted mt-3 p-2">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>

                    <div className="col-4 p-2">
                        <img src="media/images/goldenpiLogo.png" style={{width:"70%"}} alt="" />
                        <p className="text-small text-muted mt-3 p-2">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </div>
                </div>

                <div className="row me-3 mt-5"> 
                    <div className="col-4 p-2">
                        <img src="media/images/streakLogo.png" style={{width:"65%"}} alt="" />
                        <p className="text-small text-muted mt-3 p-2">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>

                    <div className="col-4 p-2">
                        <img src="media/images/smallcaseLogo.png" style={{width:"70%", paddingTop:"1rem"}} alt="" />
                        <p className="text-small text-muted mt-3 p-2">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>

                    <div className="col-4 p-2">
                        <img src="media/images/dittoLogo.png" style={{width:"50%", paddingTop:"0.75rem"}} alt="" />
                        <p className="text-small text-muted mt-3 p-2">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </div>
                </div>

                <div className="row text-center">
                    <button className="btn btn-primary fs-5 p-2 mt-5 mb-5" style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default Universe;