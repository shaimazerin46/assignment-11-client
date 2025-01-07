import { Helmet } from "react-helmet-async";
import Banner from "../PagesComponents/Banner";
import Comments from "../PagesComponents/Comments";
import Customer from "../PagesComponents/Customer";
import Partners from "../PagesComponents/Partners";
import Services from "../PagesComponents/Services";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                Home
                </title>
        
            </Helmet>
           <Banner></Banner>
           <Services></Services>
           <Partners></Partners>
           <Customer></Customer>
           <Comments></Comments>
        </div>
    );
};

export default Home;