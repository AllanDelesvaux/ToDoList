import React from 'react';
import Action from './Action';
import EnterTask from './EnterTask';
import Task from './Task';

const App = () => {
    var tasks =[ {"title":"1.Idée","isChecked":true},{"title":"2.Marché","isChecked":true},{"title":"3.Wireframe","isChecked":true},{"title":"4.Design","isChecked":true},{"title":"5.Landingpage","isChecked":true},{"title":"6.Développement","isChecked":false},{"title":"7.Publish","isChecked":false},{"title":"8.Pub","isChecked":false},{"title":"9.Feedback","isChecked":false}];
    localStorage.setItem('tasks',JSON.stringify(tasks));

    return (

        <div id="app">
            <div class="w-full h-screen bg-gray-100 pt-8">
                <div class="bg-white p-3 max-w-md mx-auto">
                    <div class="text-center">
                        <h1 class="text-3xl font-bold">ToDo App</h1>
                        <EnterTask />
                    </div>
                    <div class="mt-8">
                        <ul>
                            <Task name={tasks[0].title} isChecked={tasks[0].isChecked} />
                        </ul>
                    </div>
                    <div class="mt-8">
                        <Action value={"clear"} />
                        <Action value={"save"} />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default App;

/*task.array.forEach(element => {
    <Task value={element} />
}
);*/
