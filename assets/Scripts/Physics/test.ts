import { _decorator, Component, Node, BoxCollider, ITriggerEvent, ICollisionEvent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
    start() {
        const collider = this.getComponent(BoxCollider);
        collider.on('onTriggerEnter', this._onTriggerEnter, this);
        collider.on('onTriggerStay', this._onTriggerStay, this);
        collider.on('onTriggerExit', this._onTriggerExit, this);
        collider.on('onCollisionEnter', this._onCollisionEnter, this);
        collider.on('onCollisionStay', this._onCollisionStay, this);
        collider.on('onCollisionExit', this._onCollisionExit, this);
    }


    update(deltaTime: number) {

    }


    private _onTriggerEnter(event: ITriggerEvent) {
        console.log(this.node.name + '   target ' + event.otherCollider.node.name + '   target ' + event.type);
    }

    private _onTriggerStay(event: ITriggerEvent) {
        console.log(this.node.name + '   target ' + event.otherCollider.node.name + '   target ' + event.type);
    }

    private _onTriggerExit(event: ITriggerEvent) {
        console.log(this.node.name + '   target ' + event.otherCollider.node.name + '   target ' + event.type);
    }

    private _onCollisionEnter(event: ICollisionEvent) {
        console.log(this.node.name + '   target ' + event.otherCollider.node.name + '   target ' + event.type);
    }

    private _onCollisionStay(event: ICollisionEvent) {
        console.log(this.node.name + '   target ' + event.otherCollider.node.name + '   target ' + event.type);
    }

    private _onCollisionExit(event: ICollisionEvent) {
        console.log(this.node.name + '   target ' + event.otherCollider.node.name + '   target ' + event.type);
    }
}




