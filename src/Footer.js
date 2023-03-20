import React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <div className='appFooter'>
                <input className="search" type="text" placeholder="Filter here" onChange={this.props['searchTask']} />
                <button className="saveButton" onClick={this.props['saveButton']}>Save</button>
                <div>
                    <input className="titleAdd" placeholder="Nom de la tâche"></input>
                    <input className="dateAdd" placeholder="Date limite"></input>
                    <button className="addTask" onClick={this.props['addTask']}>Add Task</button>
                </div>
            </div>
        );
    }

}