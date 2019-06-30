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
    var patternPentagon = new Konva.Rect({
        width: 200,
        height: 150,
        x: 220,
        y: stage.height() / 2,
        // sides: 5,
        radius: 70,
        fillPatternImage: images.yoda,
        fillPatternOffset: { x: -220, y: 70 },
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
    });


    /*
     * bind listeners
     */

    patternPentagon.on('mouseover touchstart', function () {
        this.fillPatternImage(images.darthVader);
        this.fillPatternOffset({ x: -100, y: 70 });
        layer.draw();
    });

    patternPentagon.on('mouseout touchend', function () {
        this.fillPatternImage(images.yoda);
        this.fillPatternOffset({ x: -220, y: 70 });
        layer.draw();
    });


    layer.add(patternPentagon);
    stage.add(layer);
}
var sources = {
    darthVader: '/images/pulse.jpg',
    yoda: '/images/smoke.jpg'
};

loadImages(sources, function (images) {
    draw(images);
});