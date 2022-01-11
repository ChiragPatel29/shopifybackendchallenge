import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Table from './Table';
import Edit from "./Edit";
import Nav from "./Nav";
import Footer from "./Footer";

class App extends Component {

    render() {
        return (
            <div className="container">
                <Nav></Nav>
                <br/>
                <BrowserRouter>
                    <div>

                        <Route path="/edit/" component={Edit}/>
                        <Route exact path="/" component={Table}/>
                    </div>
                </BrowserRouter>
                <br/>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;