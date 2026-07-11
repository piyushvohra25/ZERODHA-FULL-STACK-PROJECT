function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="conatiner">
            <div className="row me-5 ms-5 pe-5 ps-5">
                <div className="col-6 mt-5 p-5">
                    <h1>{productName}</h1>
                    <p className="text-muted mt-4 fs-5">{productDescription}</p>
                    <div className="mt-4">
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-right-long"></i></a>
                    </div>
                </div>
                <div className="col-6 pb-5">
                    <img src={imageURL} style={{ width: "80%" }} alt="" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;