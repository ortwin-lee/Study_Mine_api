import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { MyEvent } from './MyEvent'

@ccclass('a')
export class a extends Component {
    onLoad() {
        this.node.on("foobar", (event: MyEvent) =>{
            console.log("a- capture");
        }, this, true);

        this.node.on("foobar", (event: MyEvent) =>{
            console.log("a- bubble");
        }, this, false);
    }
}


