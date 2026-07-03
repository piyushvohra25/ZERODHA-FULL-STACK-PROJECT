import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Products from "./Products";

function ProductPage () {
    return (  
        <>
            <Hero />
            <LeftSection />
            <RightSection />
            <Products />
            <Universe />
        </>
    );
}

export default ProductPage ;