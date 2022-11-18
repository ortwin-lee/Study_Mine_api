import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { node } from "./node";

@ccclass('cannon')
export class cannon extends Component {
    @property({ type: node })
    private player = null;

    start() {
        let PlayerComp = this.player;
        console.log('The player is ' + PlayerComp.a);
    }
}

