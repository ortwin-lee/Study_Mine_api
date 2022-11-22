import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { MyEvent } from './MyEvent';

@ccclass('b')
export class b extends Component {
    onLoad() {
        this.node.on('foobar', (event: MyEvent) => {
            console.log("b - bubble");
            // event.propagationStopped = true;
        })
    }
}


