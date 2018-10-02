import React from "react";
import {RootContext} from "../root-store"

const ConnectedForm = () => (
    <RootContext.Consumer>
        {({addArticle, newTitle, setTitle}) => (
            <div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={newTitle}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <button className="btn btn-success btn-lg" onClick={addArticle}>Save</button>
            </div>
        )}
    </RootContext.Consumer>
);

const Form = ConnectedForm;

export default Form;