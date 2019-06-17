var stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
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
    radius: 40,
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4,
    ShadowOffsetY: 14,
    ShadowOffsetX: 10,
    ShadowBlur: 20,
    draggable: true
});

//custom triangle shape
var triangle = new Konva.Shape({
    sceneFunc: function(context) {
      context.beginPath();
      context.moveTo(20, 50);
      context.lineTo(220, 80);
      context.quadraticCurveTo(150, 100, 260, 170);
      context.closePath();

      // special Konva.js method
      context.fillStrokeShape(this);
    },
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4
});
group.add(box)
group.add(circle)
group.add(triangle)
layer.add(group);

layer.draw();

// add cursor styling
box.on('mouseover', function () {
    document.body.style.cursor = 'pointer';
});
box.on('mouseout', function () {
    document.body.style.cursor = 'default';
});
