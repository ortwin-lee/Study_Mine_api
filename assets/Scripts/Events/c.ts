import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { MyEvent } from './MyEvent';

@ccclass('c')
export class c extends Component {

    onLoad() {
        this.node.on("foobar", (event: MyEvent) =>{
            console.log("c- cap");
        }, this, true);

        this.node.on("foobar", (event: MyEvent) =>{
            console.log("c- bubble");
        }, this, false);
    }

    start() {
        console.log("c");
        this.node.dispatchEvent( new MyEvent('foobar', true, 'detail info'));
    }
}


