import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('toggle')
export class toggle extends Component {


    onLoad() {
        console.log("toggle excuted!")
        director.addPersistRootNode(this.node)
        this.scheduleOnce(() => {
            console.log("scheduleOnce excuted!")
            director.loadScene("first", ()=>{
                console.log("loadScene excuted!")
                director.removePersistRootNode(this.node);
            });
        }, 5);
    }
}


