import React from 'react';

export default class Task extends React.Component {

    render() {

        let dateAct= new Date();
        let datTmp= this.props['date'].split('/');

        if((parseInt(datTmp[2]) < dateAct.getFullYear()) || (parseInt(datTmp[2]) === dateAct.getFullYear() && parseInt(datTmp[1]) < dateAct.getMonth()+1) || (parseInt(datTmp[2]) === dateAct.getFullYear() && parseInt(datTmp[1]) === dateAct.getMonth()+1 && parseInt(datTmp[0]) < dateAct.getDay())){
            return (
                <li className="task" >
                        <div className='buttonMove'>
                            <button className="moveUp" onClick={this.props['moveUp']}><span>↑</span></button>
                            <button className="moveDown" onClick={this.props['moveDown']}>↓</button>
                        </div>
                        
                        <p className="title">{this.props['title']}</p>
                        <p className="date">La tâche à expirée !</p>
                        <button className="deletetask" onClick={this.props['deletetask']}>
                            <span>Remove</span>
                        </button>
                </li>
                );
        }else{
            if(this.props['isChecked']){
                return (
                    <li className="task" >
                            <div className='buttonMove'>
                                <button className="moveUp" onClick={this.props['moveUp']}><span>↑</span></button>
                                <button className="moveDown" onClick={this.props['moveDown']}>↓</button>
                            </div>
                            <input type="checkbox" className="check" value={this.props['isChecked']} defaultChecked onClick={this.props['checkOrUncheck']} />
                            <p className="title">{this.props['title']}</p>
                            <p className="date">{this.props['date']}</p>
                            <button className="deletetask" onClick={this.props['deletetask']}>
                                <span>Remove</span>
                            </button>
                    </li>
                    );
            }else{
                return (
                    <li className="task" >
                            <div className='buttonMove'>
                                <button className="moveUp" onClick={this.props['moveUp']}><span>↑</span></button>
                                <button className="moveDown" onClick={this.props['moveDown']}>↓</button>
                            </div>
                            <input type="checkbox" className="check" value={this.props['isChecked']} onClick={this.props['checkOrUncheck']} />
                            <p className="title">{this.props['title']}</p>
                            <p className="date">{this.props['date']}</p>
                            <button className="deletetask" onClick={this.props['deletetask']}>
                                <span>Remove</span>
                            </button>
                    </li>
                    );
            }
        }
        
    }


}