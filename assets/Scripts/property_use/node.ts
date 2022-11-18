import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('node')
export class node extends Component {

    a = "tesss";

    start() {
        let node : Node = this.node;
        node.setPosition(2,2,2);
    }

    update(deltaTime: number) {

    }
}

