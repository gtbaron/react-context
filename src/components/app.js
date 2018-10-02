import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./list";
import Form from "./form";

const App = () => (
    <div>
        <div className="row mt-5 text-center">
            <h1 className="w-100">Using: React & Context API</h1>
        </div>
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <List />
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form />
            </div>
        </div>
    </div>
);

export default App;
