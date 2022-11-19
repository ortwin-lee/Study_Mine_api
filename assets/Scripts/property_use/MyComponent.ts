import { Component, _decorator } from 'cc';
const {ccclass} = _decorator

@ccclass("MyComponent")
export class MyComponent extends Component {

    public printNodeName () {
        console.log("++>>" + this.node.name);
    }
}