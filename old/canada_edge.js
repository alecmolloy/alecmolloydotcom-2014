/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['"Comic Sans MS", "Comic Sans", helvetica, sans-serif']='';


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'flag',
            type:'rect',
            rect:['36','82','0','0','auto','auto']
         },
         {
            id:'Text',
            type:'text',
            rect:['36','59','477','281','auto','auto'],
            text:"OH CANADAAAAA",
            align:"center",
            font:['"Comic Sans MS", "Comic Sans", helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [
         {
            id:'flag',
            symbolName:'flag'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text}": [
            ["style", "top", '116.67px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", '"Comic Sans MS", "Comic Sans", helvetica, sans-serif'],
            ["style", "height", '76px'],
            ["style", "opacity", '0'],
            ["style", "left", '113.67px'],
            ["style", "width", '328px']
         ],
         "${_flag}": [
            ["style", "top", '414.9px'],
            ["style", "left", '36px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         labels: {
            "loop": 4000
         },
         timeline: [
            { id: "eid22", tween: [ "style", "${_Text}", "width", '328px', { fromValue: '328px'}], position: 4000, duration: 0 },
            { id: "eid21", tween: [ "style", "${_Text}", "height", '76px', { fromValue: '76px'}], position: 4000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Text}", "left", '113.67px', { fromValue: '113.67px'}], position: 4000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_flag}", "top", '59px', { fromValue: '414.9px'}], position: 0, duration: 3000 },
            { id: "eid28", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 1000 },
            { id: "eid31", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 1000 },
            { id: "eid26", tween: [ "style", "${_Text}", "top", '116.67px', { fromValue: '116.67px'}], position: 4000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_flag}", "left", '36px', { fromValue: '36px'}], position: 0, duration: 0 }         ]
      }
   }
},
"flag": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],{},{},[1.1,1.1]],
      rect: [167,13,145,256],
      id: 'Rectangle',
      stroke: [9,'rgba(0,0,0,1.00)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],[0,0],[0],[1,1]],
      rect: [256,164,27,5],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1.00)']
   },
   {
      transform: [[0,0]],
      rect: [196,164,27,5],
      id: 'Rectangle4Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1.00)']
   },
   {
      transform: [[0,0],{},{},[1.1,1.1]],
      rect: [7,12,145,256],
      id: 'RectangleCopy',
      stroke: [9,'rgba(0,0,0,1.00)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1.00)']
   },
   {
      transform: [[0,0],{},{},[1.1,1.1]],
      rect: [325,12,145,256],
      id: 'RectangleCopy2',
      stroke: [9,'rgba(0,0,0,1.00)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1.00)']
   },
   {
      transform: [[0,0],[0,0],[0],[1,1]],
      rect: [229,187,19,36],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1)']
   },
   {
      transform: [[0,0],[0,0],[0],[1,1]],
      borderRadius: [10,10,10,10],
      rect: [209,134,62,53],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1)']
   },
   {
      transform: [[0,0],[0,0],[0],[1,1]],
      rect: [250,135,42,23],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1.00)']
   },
   {
      transform: [[0,0]],
      rect: [188,135,42,23],
      id: 'Rectangle3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1.00)']
   },
   {
      transform: [[0,0]],
      rect: [208,117,22,47],
      id: 'Rectangle3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1.00)']
   },
   {
      transform: [[0,0]],
      rect: [229,100,22,47],
      id: 'Rectangle3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1.00)']
   },
   {
      transform: [[0,0]],
      rect: [251,117,22,47],
      id: 'Rectangle3Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(184,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '186.52px'],
            ["style", "left", '229px'],
            ["style", "width", '19px']
         ],
         "${_Rectangle3Copy3}": [
            ["color", "background-color", 'rgba(184,0,0,1.00)'],
            ["style", "height", '47px'],
            ["style", "top", '100px'],
            ["style", "left", '229px'],
            ["style", "width", '22px']
         ],
         "${_RoundRect}": [
            ["style", "left", '209px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(184,0,0,1.00)'],
            ["style", "left", '250px'],
            ["style", "top", '135.34px']
         ],
         "${_Rectangle4Copy}": [
            ["color", "background-color", 'rgba(184,0,0,1.00)'],
            ["style", "left", '195.08px']
         ],
         "${_Rectangle3Copy4}": [
            ["color", "background-color", 'rgba(184,0,0,1.00)'],
            ["style", "height", '47px'],
            ["style", "top", '117px'],
            ["style", "left", '251.04px'],
            ["style", "width", '22px']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(184,0,0,1.00)'],
            ["style", "left", '188px'],
            ["style", "top", '135.34px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(184,0,0,1.00)'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.1'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '9px'],
            ["style", "width", '145px'],
            ["style", "top", '12.99px'],
            ["transform", "scaleY", '1.1'],
            ["style", "height", '256px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '7.25px']
         ],
         "${_RectangleCopy2}": [
            ["color", "background-color", 'rgba(184,0,0,1.00)'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.1'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '9px'],
            ["style", "width", '145px'],
            ["style", "top", '12.99px'],
            ["transform", "scaleY", '1.1'],
            ["style", "height", '256px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '325.73px']
         ],
         "${symbolSelector}": [
            ["style", "height", '281.6px'],
            ["style", "width", '477.980011px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.1'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '9px'],
            ["style", "width", '145px'],
            ["style", "top", '13.99px'],
            ["transform", "scaleY", '1.1'],
            ["style", "height", '256px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '167.35px']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(184,0,0,1.00)'],
            ["style", "left", '256.27px']
         ],
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(184,0,0,1.00)'],
            ["style", "height", '47px'],
            ["style", "top", '117px'],
            ["style", "left", '208px'],
            ["style", "width", '22px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-36044183");
