window.onload = floatingPoints;

function floatingPoints() {
    var intervals = 20,
        canvas = document.getElementById('bg-content'),
        tool = new paper.Tool(),
        isTouch = 'ontouchstart' in document.documentElement;
    paper.setup(canvas);

    if (!isTouch) {
        lineColor = '#fcebf1';
    } else {
        lineColor = '#f2c0d3';
    }

    canvas.style.cursor = 'none';
    document.getElementsByClassName('section02')[0].style.cursor = 'none';

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
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        },
        pointB = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        },
        pointC = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        };
    BAIntervals = updateIntervals(pointA, pointB);
    BCIntervals = updateIntervals(pointB, pointC);
    connectors = [];


    for (var i = 0; i <= intervals; i++) {
        connectors[i] = new paper.Path(BAIntervals[i], BCIntervals[i]);
        connectors[i].strokeColor = lineColor;
        connectors[i].strokeCap = 'round';
    }

    var axSign = 0.1,
        aySign = 0.3,
        bxSign = 0.05,
        bySign = 0.07,
        cxSign = -0.4,
        cySign = -0.2;


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

        if (isTouch || document.body.scrollTop > window.innerHeight * .75) {
            pointB.x += bxSign;
            pointB.y += bySign;
            if (pointB.x < 1) {
                bxSign *= -1;
            };
            if (pointB.y < 1) {
                bySign *= -1;
            };
            if (pointB.x >= window.innerWidth) {
                bxSign *= -1;
            };
            if (pointB.y >= window.innerHeight) {
                bySign *= -1;
            };
            tool.onMouseMove = 0;
        } else {
            tool.onMouseMove = moveAxis;
        }
    }




    if (document.body.scrollTop < window.innerHeight * .75) {
        tool.onMouseMove = moveAxis;
    }

    function moveAxis(e) {
        pointB.x = e.point.x;
        pointB.y = e.point.y;
    }

    tool.onKeyDown = function (e) {
        if (e.key === "=" || e.key === "+") {
            intervals++;
            BAIntervals = updateIntervals(pointA, pointB);
            BCIntervals = updateIntervals(pointB, pointC);
            connectors[intervals] = new paper.Path(BAIntervals[intervals], BCIntervals[intervals]);
            connectors[intervals].strokeColor = lineColor;
            connectors[intervals].strokeCap = 'round';
        }

        if (e.key === "-" && intervals > 1) {
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