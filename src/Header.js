import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <h1 className="head"> Tâches terminées : {this.props["done"]} / {this.props["all"]} </h1>
        );
    }

}