function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}
function draw(images) {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
        container: 'container2',
        width: width,
        height: height
    });
    var layer = new Konva.Layer();

    var patternPentagon = new Konva.Rect({
        width: 200,
        height: 150,
        x: 220,
        y: stage.height() / 2,
        // sides: 5,
        radius: 70,
        fillPatternImage: images.darthVader,
        fillPatternOffset: { x: -220, y: 70 },
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });

    var linearGradPentagon = new Konva.RegularPolygon({
        x: 360,
        y: stage.height() / 2,
        sides: 5,
        radius: 70,
        fillLinearGradientStartPoint: { x: -50, y: -50 },
        fillLinearGradientEndPoint: { x: 50, y: 50 },
        fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });

    var radialGradPentagon = new Konva.RegularPolygon({
        x: 500,
        y: stage.height() / 2,
        sides: 5,
        radius: 70,
        fillRadialGradientStartPoint: { x: 0, y: 0 },
        fillRadialGradientStartRadius: 0,
        fillRadialGradientEndPoint: { x: 0, y: 0 },
        fillRadialGradientEndRadius: 70,
        fillRadialGradientColorStops: [0, 'red', 0.5, 'yellow', 1, 'blue'],
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });

    /*
     * bind listeners
     */
    colorPentagon.on('mouseout touchend', function () {
        this.fill('red');
        layer.draw();
    });

    patternPentagon.on('mouseover touchstart', function () {
        this.fillPatternImage(images.yoda);
        this.fillPatternOffset({ x: -100, y: 70 });
        layer.draw();
    });

    patternPentagon.on('mouseout touchend', function () {
        this.fillPatternImage(images.darthVader);
        this.fillPatternOffset({ x: -220, y: 70 });
        layer.draw();
    });

    linearGradPentagon.on('mouseover touchstart', function () {
        this.fillLinearGradientStartPoint({ x: -50 });
        this.fillLinearGradientEndPoint({ x: 50 });
        this.fillLinearGradientColorStops([0, 'green', 1, 'yellow']);
        layer.draw();
    });

    linearGradPentagon.on('mouseout touchend', function () {
        // set multiple properties at once with setAttrs
        this.setAttrs({
            fillLinearGradientStartPoint: { x: -50, y: -50 },
            fillLinearGradientEndPoint: { x: 50, y: 50 },
            fillLinearGradientColorStops: [0, 'red', 1, 'yellow']
        });
        layer.draw();
    });

    radialGradPentagon.on('mouseover touchstart', function () {
        this.fillRadialGradientColorStops([
            0,
            'red',
            0.5,
            'yellow',
            1,
            'green'
        ]);
        layer.draw();
    });

    radialGradPentagon.on('mouseout touchend', function () {
        // set multiple properties at once with setAttrs
        this.setAttrs({
            fillRadialGradientStartPoint: 0,
            fillRadialGradientStartRadius: 0,
            fillRadialGradientEndPoint: 0,
            fillRadialGradientEndRadius: 70,
            fillRadialGradientColorStops: [0, 'red', 0.5, 'yellow', 1, 'blue']
        });
        layer.draw();
    });

    layer.add(colorPentagon);
    layer.add(patternPentagon);
    layer.add(linearGradPentagon);
    layer.add(radialGradPentagon);
    stage.add(layer);
}
var sources = {
    darthVader: '/images/pulse.jpg',
    yoda: '/images/smoke.jpg'
};

loadImages(sources, function (images) {
    draw(images);
});