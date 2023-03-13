import React from 'react';

export default class Action extends React.Component {

    render() {
        return (
            <button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" onClick={() => this.actfct()}>{this.props.value}</button>
        );
    }

}