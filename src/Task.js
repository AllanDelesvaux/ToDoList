import React from 'react';

export default class Task extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            isChecked: props.isChecked,
          };
    }

    render() {
        return (
            <li className="task" >
                    <input type="checkbox" className="check" value={this.props['isChecked']} onClick={this.props['checkOrUncheck']} />
                    <p className="title">{this.props['title']}</p>
                    <button className="deletetask" onClick={this.props['deletetask']}>
                        <span>Remove</span>
                    </button>
            </li>
            );
    }


}