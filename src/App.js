import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Task from './Task';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            tasks : JSON.parse(localStorage.getItem('tasks')),
        }
    }

    //localStorage.setItem('tasks',JSON.stringify(tasks));

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
                    <Footer addTask={() => this.addTask()}/>
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
            tabb.push(<Task key={i} title={this.state.tasks[i].title} isChecked={this.state.tasks[i].isChecked} checkOrUncheck={() => this.checkOrUncheck(i)} deletetask={() => this.deletetask(i)} searchTask={() => this.searchTask()}/>);
        }

        return(tabb);
    }

    checkOrUncheck(pos){
        let newTasks = this.state.tasks.slice();
        newTasks[pos]['isChecked'] = !newTasks[pos]['isChecked'];

        this.setState({
            tasks: newTasks,
        })

        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    deletetask(pos){
        let newTasks = this.state.tasks.slice(pos);
        //newTasks.push(this.state.tasks.slice(pos+1));
        
        this.setState({
            tasks: newTasks,
        })

        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    searchTask(){

    }

    addTask(){
        let newTasks= this.state.tasks.slice();

        alert("Entrez le nom de la tâche");
        
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

}

