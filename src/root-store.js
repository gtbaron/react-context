import React from "react";

export const RootContext = React.createContext();

class RootStore extends React.Component {
    state = {
        articles: [],
        newTitle: ""
    };

    setTitle = (title) => {
      this.setState({
          ...this.state,
          newTitle: title
      })
    };

    addArticle = () => {
        this.setState({
            articles: this.state.articles.concat({
                title: this.state.newTitle
            })
        })
    };

    render() {
        return (
            <RootContext.Provider
                value={{
                    articles: this.state.articles,
                    newTitle: this.state.newTitle,
                    setTitle: this.setTitle,
                    addArticle: this.addArticle
                }}
            >
                {this.props.children}
            </RootContext.Provider>
        )
    }
}

export const Store = RootStore;

