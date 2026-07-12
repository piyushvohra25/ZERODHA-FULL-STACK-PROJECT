function Hero() {
    return (
        <header id="supportTab">
            <div className="container" id="supportContainer">
                <div className="row p-4">
                    <div className="col-6">
                        <h5>Support Portal</h5>
                    </div>
                    <div className="col-6" style={{textAlign:"right"}}>
                        <a href="">Track Tickets</a>
                    </div>
                </div>
                <div className="row m-3 pb-5">
                    <div className="col-6">
                        <h3>Search for an answer or browse help topics to create a ticket</h3>
                        <input placeholder="Eg. how do I activate F&O" className="mb-3"/>
                        <br />
                        <a href="">Track account opening</a>
                        <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <a href="">Track segment activation</a> 
                        <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <a href="">Intraday margins</a> 
                        <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <a href="">Kite user manual</a>
                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4">
                        <h3 className="mb-4">Featured</h3>
                        <a href="">1. Current Takeovers and Delisting - January 2026</a> 
                        <br /><br />
                        <a href="">2. Latest Intraday leverages - MIS & CO</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;