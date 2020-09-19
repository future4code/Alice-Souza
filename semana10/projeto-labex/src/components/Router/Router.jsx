import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage';
import ListTripsPage from '../ListTripsPage/ListTripsPage';
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CreateTripPage from '../CreateTripPage/CreateTripPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/inscricao">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/admin">
                    <Admin />
                </Route>
                <Route exact path="/listadeviagens">
                    <ListTripsPage />
                </Route>
                <Route exact path="/detalhesdaviagem/:codigo">
                    <TripDetailsPage />
                </Route>
                <Route exact path="/paginacriarviagem">
                    <CreateTripPage />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router />, rootElement);
export default Router;