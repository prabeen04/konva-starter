var stage = new Konva.Stage({
    container: 'container',
    width: 400,
    height: 500,
});

// add canvas element
var layer = new Konva.Layer({
    zIndex: 0
});
stage.add(layer);
var group = new Konva.Group({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: 'red',
})
// create shape
var box = new Konva.Rect({
    width: 100,
    height: 50,
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true
});
var circle = new Konva.Circle({
    x: 150,
    y: 150,
    radius: 60,
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4,
    ShadowOffsetY: 14,
    ShadowOffsetX: 10,
    ShadowBlur: 20,
    draggable: true
});


group.add(box)
group.add(circle)
layer.add(group);

layer.draw();

// add cursor styling
box.on('mouseover', function () {
    document.body.style.cursor = 'pointer';
});
box.on('mouseout', function () {
    document.body.style.cursor = 'default';
});
