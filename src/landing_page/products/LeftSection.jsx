function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="conatainer">
            <div className="row me-5 ms-5 pe-5 ps-5">
                <div className="col-6 p-5">
                    <img src={imageURL} style={{width:"80%"}} alt="" />
                </div>
                <div className="col-6 mt-5 p-5">
                    <h1>{productName}</h1>
                    <p className="text-muted mt-4 fs-5">{productDescription}</p>
                    <div className="mt-4">
                        <a href={tryDemo}  style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-right-long"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i class="fa-solid fa-right-long"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore} style={{marginLeft:"30px"}}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;