import { _decorator, Component, Node, EventTarget } from 'cc';
const { ccclass, property } = _decorator;
const eventTarget = new EventTarget();

@ccclass('sayHello')
export class sayHello extends Component {
    onEnable () {
        eventTarget.on('foobar', this._sayHello, this);
    }


    start () {
        eventTarget.emit('foobar', 1,2);
    }

    onDisable () {
        eventTarget.off('foobar', this._sayHello,this);
    }


    _sayHello (a,b) {
        console.log(`${a} :Hello World ${b}`);
    }
}


