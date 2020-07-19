import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../mainFils/Home';
import Offers from '../mainFils/offers/Offers';
import OffersItem from '../mainFils/OffersItem/OffersItem';
import AvailableClinic from "../mainFils/AvailableClinic/AvailableClinic";
import ACDocFile from "../mainFils/AvailableClinicDocFile/AvailableClinicDocFile";
import ContactUs from "../mainFils/ContactUs/ContactUs";
import LogIn from "../mainFils/LogIn";
import SignUp from "../mainFils/SignUp";
import Blogs from "../mainFils/Blogs/Blogs";
import BlogItem from "../mainFils/BlogItem/BlogItem";
import ConditionsAndLaws from "../mainFils/conditionsAndLaws";

const Rout = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Offers" exact component={Offers} />
            <Route path="/OffersItem" exact component={OffersItem} />
            <Route path="/Blogs" exact component={Blogs} />
            <Route path="/blogLink" exact component={BlogItem} />
            <Route path="/AvailableClinic:ClincNum" exact component={AvailableClinic} />
            <Route path="/ACDocFile" exact exact component={ACDocFile} />
            <Route path="/ContactUs" exact component={ContactUs} />
            <Route path="/LogIn" exact component={LogIn} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/ConditionsAndLaws" exact component={ConditionsAndLaws} />
            {/*<Route path="/:nameofparm" component={Dd} /> */}
        </Switch>
    );
}
export default Rout