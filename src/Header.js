import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <div>
            <h1 className="head"> ToDo List ! </h1>
            <h2>Tâches terminées : {this.props["done"]} / {this.props["all"]} </h2>
            </div>
        );
    }

}