import { _decorator, Component, Node, Label, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SayHello')
export class SayHello extends Component {
    // 分组一
    // 组内名为 “bar” 的属性分类，其中包含一个名为 label 的 Label 属性
    @property({ group: { name: 'bar' }, type: Label })
    label: Label = null!;
    // 组内名为 “foo” 的属性分类，其中包含一个名为 sprite 的 Sprite 属性
    @property({ group: { name: 'foo' }, type: Sprite })
    sprite: Sprite = null!;

    // 分组二
    // 组内名为 “bar2” 的属性分类，其中包含名为 label2 的 Label 属性和名为 sprite2 的 Sprite 属性，并且指定排序为 1。
    @property({ group: { name: 'bar2', id: '2', displayOrder: 1 }, type: Label })
    label2: Label = null!;
    @property({ group: { name: 'bar2', id: '2' }, type: Label })
    label3: Label = null!;

    @property({ group: { name: 'bar3', id: '2' }, type: Sprite })
    sprite2: Sprite = null!;
    @property({ group: { name: 'bar3', id: '2' }, type: Sprite })
    sprite3: Sprite = null!;

}

