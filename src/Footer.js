import React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <div className='Footer'>
            <input className="search" type="text" placeholder="Enter your task here" />
            <button className="addTask" onClick={this.props['addTask']}>Add Task</button>
            </div>
        );
    }

}