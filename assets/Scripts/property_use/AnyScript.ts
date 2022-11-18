// AnyScript.ts
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
// this feels more safe since you know where the object comes from
import{Global}from "./Global";

@ccclass("AnyScript")
export class AnyScript extends Component {
    start () {
        const text = "Back";
        Global.backLabel.string = text;
    }
}