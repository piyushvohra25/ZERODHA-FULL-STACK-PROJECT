function Brokerage() {
    return (
        <div className="container mt-5 border-top text-center">
            <div className="row mt-5">
                <div className="col-8">
                    <h5 className="mb-4" style={{color: "#007FFF"}}>Brokerage Calculator</h5>
                    <ul style={{textAlign: "left", lineHeight: "2.5", fontSize: "15px"}} className="text-mut">
                        <li>
                            Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                            GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contract notes, if required, shall be charged
                            ₹20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                            equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be
                            charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5 style={{color: "#007FFF"}}>List of Charges</h5>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;