import { _decorator, Component, Prefab, director, instantiate, Scene ,Node} from "cc";
const { ccclass, property } = _decorator;

@ccclass("test")
export class test extends Component {
    @property({ type: Prefab })
    private target: Prefab = null;

    private positionz: number = -20;

    private scene : Scene = null;
    private nod : Node = null;

    start() {
        this.scene = director.getScene();
        this.nod = instantiate(this.target);


        // 5秒后销毁节点
        setTimeout(
            function () {
                this.nod.destroy();
            }.bind(this),
            5000
        );
    }


    update(deltaTime: number) {
        console.info(this.nod.isValid);
        this.positionz += 1 * deltaTime;
        if (this.nod.isValid) {
            this.scene.addChild(this.nod);
            this.nod.setPosition(0.0, 0.0, this.positionz);
        }
    }
}
