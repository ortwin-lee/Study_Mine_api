import { _decorator, Component, Input, input, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Touch')
export class Touch extends Component {
    onLoad () {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onDestroy () {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchStart(event: EventTouch) {
        //console.log(event.getLocation());  // Location on screen space
        //console.log(event.getUILocation());  // Location on UI space
    }

    onTouchMove(event: EventTouch) {
        console.log("------------------");
        console.log("location: " + event.getLocation());
        console.log("perviousLocation: " + event.getPreviousLocation());
        console.log("delta: " + event.getDelta());

    }
}


