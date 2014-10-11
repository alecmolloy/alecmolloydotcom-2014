/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

//=========================================================

   //Edge symbol: 'flag'
   (function(symbolName) {

   })("flag");
   //Edge symbol end:'flag'

})(jQuery, AdobeEdge, "EDGE-36044183");