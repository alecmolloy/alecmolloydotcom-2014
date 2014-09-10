window.onload = floatingPoints;

function floatingPoints() {
    var intervals = 20,
        canvas = document.getElementById('section01-content'),
        tool = new paper.Tool(),
        color = {
//            colour1 : '#f05c94',
            colour1 : '#fff5f9',
            colour2 : '#ffffff'
        },
        lineColor = color.colour1;
    paper.setup(canvas);

    document.getElementsByTagName('body')[0].style.cursor = 'none';

    function updateIntervals(point1, point2) {
        var intervalArray = [];
        for (var i = 0; i <= intervals; ++i) {
            intervalArray[i] = {
                x: ((point2.x - point1.x) / intervals) * i + point1.x,
                y: ((point2.y - point1.y) / intervals) * i + point1.y
            };
        }
        return intervalArray;
    }

    function updateConnectors(connectorArray) {
        for (var i = 0; i <= intervals; i++) {
            connectorArray[i].segments[0].point.x = BAIntervals[i].x;
            connectorArray[i].segments[0].point.y = BAIntervals[i].y;
            connectorArray[i].segments[1].point.x = BCIntervals[i].x;
            connectorArray[i].segments[1].point.y = BCIntervals[i].y;
        }
    }

    var pointA = {
            x: 0.5 * window.innerWidth,
            y: 0.25 * window.innerHeight
        },
        pointB = {
            x: 0.1 * window.innerWidth,
            y: 0.5 * window.innerHeight
        },
        pointC = {
            x: 0.9 * window.innerWidth,
            y: 0.75 * window.innerHeight
        };
    BAIntervals = updateIntervals(pointA, pointB);
    BCIntervals = updateIntervals(pointB, pointC);
    connectors = [];


    for (var i = 0; i <= intervals; i++) {
        connectors[i] = new paper.Path(BAIntervals[i], BCIntervals[i]);
        connectors[i].strokeColor = lineColor;
        connectors[i].strokeCap = 'round';
    }

    var axSign = -1.5,
        aySign = .8,
        cxSign = -2,
        cySign = 1;


    paper.view.onFrame = function () {

        pointA.x += axSign;
        pointA.y += aySign;
        pointC.x += cxSign;
        pointC.y += cySign;

        if (pointA.x < 1) {
            axSign *= -1;
        };
        if (pointA.y < 1) {
            aySign *= -1;
        };
        if (pointC.x < 1) {
            cxSign *= -1;
        };
        if (pointC.y < 1) {
            cySign *= -1;
        };
        if (pointA.x >= window.innerWidth) {
            axSign *= -1;
        };
        if (pointA.y >= window.innerHeight) {
            aySign *= -1;
        };
        if (pointC.x >= window.innerWidth) {
            cxSign *= -1;
        };
        if (pointC.y >= window.innerHeight) {
            cySign *= -1;
        };
        BAIntervals = updateIntervals(pointA, pointB);
        BCIntervals = updateIntervals(pointB, pointC);
        updateConnectors(connectors);
    }

    tool.onMouseMove = function (e) {
        pointB.x = e.point.x;
        pointB.y = e.point.y;
    }

    tool.onKeyDown = function (e) {
        if (e.key === "up") {
            intervals++;
            BAIntervals = updateIntervals(pointA, pointB);
            BCIntervals = updateIntervals(pointB, pointC);
            connectors[intervals] = new paper.Path(BAIntervals[intervals], BCIntervals[intervals]);
            connectors[intervals].strokeColor = lineColor;
            connectors[intervals].strokeCap = 'round';
        }

        if (e.key === "down") {
            intervals--;
            for (var i = 0; i <= intervals; i++) {
                connectors[intervals + 1].remove();
            }
        }

        if (e.key === "right") {
            intervals--;
            for (var i = 0; i <= intervals; i++) {
                connectors[intervals + 1].remove();
            }
        }
    }

    window.onresize = function () {
        paper.view.viewSize = [window.innerWidth, window.innerHeight];
    }

};
