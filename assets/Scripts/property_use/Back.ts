// Back.ts
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;
// this feels more safe since you know where the object comes from
import{Global}from "./Global";

@ccclass("Back")
export class Back extends Component {
    onLoad() {
        Global.backNode = this.node;
        Global.backLabel = this.getComponent(Label);
    }
}