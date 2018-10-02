import React from "react"
import {RootContext} from "../root-store";

const ConnectedList = () => (
    <RootContext.Consumer>
        {({articles}) => (
            <ul className="list-group list-group-flush">
                { articles.map((article, index) => (
                    <li className="list-group-item" key={index}>
                        {article.title}
                    </li>
                ))}
            </ul>
        )}
    </RootContext.Consumer>
);

const List = ConnectedList;

export default List;