import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../mainFils/Home';
import Offers from '../mainFils/offers/Offers';
import AvailableClinic from "../mainFils/AvailableClinic";
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
            <Route path="/Offers" component={Offers} />
            <Route path="/Blogs" component={Blogs} />
            <Route path="/blogLink" component={BlogItem} />
            <Route path="/AvailableClinic" component={AvailableClinic} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/LogIn" component={LogIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/ConditionsAndLaws" component={ConditionsAndLaws} />
            {/*<Route path="/:nameofparm" component={Dd} /> */}
        </Switch>
    );
}
export default Rout