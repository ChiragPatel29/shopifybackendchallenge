import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Table from './Table';
import Edit from "./Edit";

class App extends Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Table}/>
                        <Route exact path="/edit/:id" component={Edit}/>

                    </div>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    }
}

export default App;