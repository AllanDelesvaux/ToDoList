import React from "react";
import Action from './Action';

export default class EnterTask extends React.Component {

    render() {
        return (
            <div class="mt-4 flex">
                <input
                    class="w-80 border-b-2 border-gray-500 text-black"
                    type="text" placeholder="Enter your task here"
                />
                <Action value={"add"} />
            </div>
        );
    }

}