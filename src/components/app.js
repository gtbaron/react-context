import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./list";
import logo from "../logo.svg";
import Form from "./form";

const App = () => (
    <div>
        <div className="row mt-5 text-center header-row">
            <div className="margin-auto">
                <div className="d-inline-block">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="d-inline-block height-30">
                    <div className="d-table-cell">
                        <h1 className="w-100">Using: React & Context API</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <List/>
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form/>
            </div>
        </div>
    </div>
);

export default App;
