import { _decorator, Component, Node, Enum, CCString, Color, RealCurve, CurveRange, Gradient, GradientRange } from 'cc';
const { ccclass, property } = _decorator;

enum A {
    c,
    d
}

Enum(A);

@ccclass('property_use')
export class property_use extends Component {
    @property
    index = 0;

    @property(Node)
    targetNode: Node | null = null;

    @property([Node])
    children: Node[] = [];

    @property({type:CCString, multiline:true})
    text = '';

    @property({tooltip:"hhh"})
    children2 = [];

    @property({ type: A })
    accx : A = A.c;

    @property({slide : true, range:[10,1000,5]})
    num = 0;

    @property(Color)
    color:Color;

    @property(RealCurve)
    realCurve:RealCurve = new RealCurve();

    @property(CurveRange)
    curveRang : CurveRange = new CurveRange();

    @property(Gradient)
    gradient = new Gradient();

    @property(GradientRange)
    gradientRange:GradientRange = new GradientRange();
}

