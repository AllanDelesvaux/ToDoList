import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Task from './Task';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            tasks :  JSON.parse(localStorage.getItem('tasks')),
        }
    }

    render() {

        return (

            <div className="app">
                <div className="app-header">
                    <Header done={this.nbChecked()} all={this.state.tasks.length} />
                </div>

                <div className="app-body">
                    {this.alltasks()}
                </div>

                <div className="app-footer">
                    <Footer saveButton={()=>this.saveButton()} addTask={() => this.addTask()} searchTask={() => this.searchTask()}/>
                </div>
            </div>
        );
    }

    nbChecked(){
        let cp = 0;
        for(let i=0;i<this.state.tasks.length;i++){
            if(this.state.tasks[i]["isChecked"])(
                cp++
            )
        }
        
        return cp;
    }


    alltasks(){
        
        let tabb = [];

        for(let i=0 ;i<this.state.tasks.length;i++){
            tabb.push(<Task key={i} title={this.state.tasks[i].title} isChecked={this.state.tasks[i].isChecked} date={this.state.tasks[i].date} checkOrUncheck={() => this.checkOrUncheck(i)} deletetask={() => this.deletetask(i)} moveUp={() => this.moveUp(i)} moveDown={() => this.moveDown(i)} />);
        }

        return(tabb);
    }

    moveUp(pos){
        let newTasks = this.state.tasks.slice();
        if(pos > 0){
            newTasks[pos]=this.state.tasks[pos-1];
            newTasks[pos-1]=this.state.tasks[pos];

            this.setState({tasks:newTasks});
        }
    }

    moveDown(pos){
        let newTasks = this.state.tasks.slice();
        if(pos < this.state.tasks.length-1){
            newTasks[pos]=this.state.tasks[pos+1];
            newTasks[pos+1]=this.state.tasks[pos];

            this.setState({tasks:newTasks});
        }
    }

    checkOrUncheck(pos){
        let newTasks = this.state.tasks.slice();
        newTasks[pos]['isChecked'] = !newTasks[pos]['isChecked'];

        this.setState({tasks:newTasks});
    }

    deletetask(pos){
        let newTasks = this.state.tasks.slice();

        newTasks[pos]=this.state.tasks[this.state.tasks.length-1];
        newTasks[this.state.tasks.length-1]=this.state.tasks[pos];
        newTasks.pop();

        this.setState({tasks:newTasks});
        
    }

    searchTask(){
        let filt = document.getElementsByClassName("search")[0].value;
        console.log(filt);
        if(filt.length >2){
            let newTasks = (JSON.parse(localStorage.getItem('tasks'))).filter(el =>  el.title.toLowerCase().indexOf(filt.toLowerCase()) !== -1);
            this.setState({tasks:newTasks});
        }else if(filt.length === 0 ){
            this.setState({tasks:JSON.parse(localStorage.getItem('tasks'))});
        }

    }

    saveButton(){
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    addTask(){
        let newTasks= this.state.tasks.slice();
        
        newTasks.push({"title": document.getElementsByClassName("titleAdd")[0].value
        ,"isChecked":false, "date":document.getElementsByClassName("dateAdd")[0].value});

        this.setState({tasks:newTasks});
    }

}


 

