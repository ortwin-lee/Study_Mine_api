import { Component, _decorator } from 'cc';
const {ccclass} = _decorator
import {MyComponent} from "./MyComponent"

@ccclass("MyNode")
class MyNode extends Component {

    onLoad()
    {
        console.log("loading......")
        const myComponet = this.node.addComponent(MyComponent);
        myComponet.printNodeName()
        myComponet.destroy()
    }

}