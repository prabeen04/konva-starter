var stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

// add canvas element
var layer = new Konva.Layer({
    zIndex: 0
});
var layer2 = new Konva.Layer({
    zIndex: 1
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
    // x: 50,
    // y: 50,
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
var imageObj = new Image();

imageObj.onload = function () {
    var image = new Konva.Image({
        x: 200,
        y: 50,
        image: imageObj,
        width: 100,
        height: 100
    });
};
imageObj.src = 'https://a10.gaanacdn.com/images/playlists/27/1038627/crop_175x175_1559652875_1038627.jpg'
// circle.cache()
// circle.filters([Konva.filter.Blur])
// circle.blurRadius(10)
group.add(box)
group.add(circle)
layer.add(group);

stage.add(layer2);
layer2.add(imageObj)
layer.draw();

// add cursor styling
box.on('mouseover', function () {
    document.body.style.cursor = 'pointer';
});
box.on('mouseout', function () {
    document.body.style.cursor = 'default';
});
