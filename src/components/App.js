import React from 'react';
import { Route, Switch } from 'react-router-dom';
import APIcall from './APIcall';
import Navbar from './Navbar';
import About from '../pages/About';
import Contact from '../pages/Contact';
import "./styles.css";

function App(){
    return(
        <>
            <Navbar />
            <Switch>
                <Route path="/" component={APIcall} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/:githubUsername" exact>
                    single profile page
                </Route>
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;