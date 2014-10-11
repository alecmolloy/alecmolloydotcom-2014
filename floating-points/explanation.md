# Moving line designs

      A
     / 
    /
   /
B /______ C

fig. 1

## Features:
1. Points A and C move in straight lines around the screen, naturally bouncing on the sides of the canvas.
2. Point B’s position is determined by the position of the mouse.
3. The strokes of the lines are neon.
4. The canvas takes up the entire screen.
5. The color of the lines change every time the user clicks.


## Feature Prototypes
1. Points start at a random place on the screen and move towards a random border point. When it collides with the wall, it is given a new border point to advance towards.
2. On onmousemove, point B's location is updated.
3. 
4. Set canvas to window.width and window.height. On window resize, update the canvas size.
5. On onmouseup, a color from the array is randomly selected


1. There are three points. A, B, and C.
2. X/Y value pairs are created for evenly spaced intervals between BA and BC
3. Paths are created that begin at an interval on BA, and end at the opposite interval on BC
4. On onmousemove,
    a. point B moves
    b. each X/Y value pair is recreated
    c. each path endpoint is moved