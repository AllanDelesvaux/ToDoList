import React from 'react';

export default class Task extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            isChecked: props.isChecked
          };
    }

    render() {
        return (
            <li class="p-2 rounded-lg" >
                <div class="flex align-middle flex-row justify-between">
                    <div class="p-2">
                        <input type="checkbox" class="h-6 w-6 " value={this.state.isChecked} />
                    </div>
                    <div class="p-2">
                        <p class="text-lg line-through text-gray-400">{this.state.name}</p>
                    </div>
                    <button
                        class="flex text-red-500 border-2 border-red-500 p-2 rounded-lg" onClick={() => this.remove()}>
                        <svg class="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                        <span>Remove</span>
                    </button>
                </div>
                <hr class="mt-2" />
            </li>
            );
    }

}