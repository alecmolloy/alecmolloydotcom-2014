@charset "utf-8";

@font-face {  
  font-family:"UmbraOtf";
  src: url(assets/fonts/UmbraStd.eot); /* IE */  
  src: local("Umbra Std"), url(assets/fonts/UmbraStd.otf) format("opentype"); /* non-IE */
  font-style:italic;
}  

@font-face {  
  font-family:"UmbraOtf";
  src: url(assets/fonts/UmbraStd.eot); /* IE */  
  src: local("Umbra Std"), url(assets/fonts/UmbraStd.otf) format("opentype"); /* non-IE */
  font-style:normal;
}  

@font-face {  
  font-family:"Rockttf";
  src: url(assets/fonts/rockwell.eot); /* IE */  
  src: local("Rockttf"), url(assets/fonts/rockwell.ttf) format("truetype"); /* non-IE */
  font-weight:normal;
}  

@font-face {  
  font-family:"Rockttf";
  src: url(assets/fonts/rockwell.eot); /* IE */  
  src: local("Rockttf"), url(assets/fonts/rockwell-i.ttf) format("truetype"); /* non-IE */
  font-style:italic;
}

/* CSS Document */

h1
{
	font-family:"UmbraOtf", Verdana, Geneva, sans-serif;
	font-size:100pt;
	color:#111;
	text-shadow:#aaa 0px 1px 3px;
	font-style:oblique;
	font-weight:normal;
}


h2
{
	font-family:"UmbraOtf", Verdana, Geneva, sans-serif;
	font-size:40pt;
	color:#222;
	text-shadow:#aaa 0px 1px 3px;
	font-style:italic;
	font-weight:normal;
}

h3
{
	font-family:Verdana, Geneva, sans-serif;
	font-size:7pt;
	font-weight:normal;
	text-align:right;
	margin-top:0px;
}

h4
{	
	font-family:"UmbraOtf", Verdana, Geneva, sans-serif;
	font-size:45pt;
	color:#222;
	text-shadow:#aaa 0px 1px 3px;
	font-weight:normal;
	margin:10px 0 0 0;
}

h4 a
{
	text-decoration:none;
	font-family:"Rockttf", Verdana, Geneva, sans-serif;
	font-size:20pt;
	color:#222;
	text-shadow:#aaa 0 1px 3px;
	line-height:1.5em;
	font-weight:normal;
	font-style:italic;
	letter-spacing:7px;
}

h4 a:hover
{
	text-decoration:none;
	color:#000;
	text-shadow:#aaa 0 0 10px;
}


.caption
{
	font-family:Rockttf, Verdana, Geneva, sans-serif;
	font-size:10pt;
	line-height:1em;
}


body
{
	background-image:url(assets/bg.png);
	background-attachment:fixed;
}

html, body
{
	height:100%;
	width:100%;
	margin:0;
	padding:0;
}

img
{
	border:0;
}

.wrapper
{
	width:1024px;
	margin:0 auto 0 auto;
	padding:0 auto 0 auto;
}

.topbox
{
	width:100%;
	height:50px;
	text-align:center;
	vertical-align:top;
	z-index:1;
	top:0px;
	margin:0px;
	padding:0px;
}

.bottombox
{
	width:100%;
	height:40px;
	z-index:1;
	bottom:40px;
	text-align:center;
	word-spacing:3em;
	position:fixed;
}

.contentbox
{
	width:749px;
	min-height:100%;
	text-align:center;
	z-index:0;
	margin:0 auto 0 auto;
}

.padder
{
	margin:110px 0 40px 0;
}

#home
{
	padding:90px 0 0 0;
	width:100%;
}

.resume
{
	margin-top:350px;
}

div.biography
{
	margin-top:300px;
}

div.portfolio
{
	margin-top:300px;
}

div.contact
{
	margin-top:300px;
}

div.hrblack
{
	width:730px;
	height:1px;
	background-color:#333;
	margin:15px auto 15px auto;
}

footer
{
	margin-top:150px;
}

.caption a
{
	font-size:9pt;
}

a:link
{
	color:#000;
	text-decoration:inherit;
}
a:hover
{
	color:#000;
	text-decoration:underline;
}
a:active
{
	color:#000;
	text-decoration:underline;
}
a:visited
{
	color:#000;
	text-decoration:inherit;
}

p
{
	font-family:Verdana, Geneva, sans-serif;
	font-size:10pt;
	color:#222;
	text-shadow:#aaa 0px 1px 3px;
}

p.biotext
{
	font-size:12pt;
	text-align:left;
	text-indent:3em;
}

p.contacttext
{
	text-align:center;
	font-size:20pt;
	font-family:"Rockttf", Verdana, Geneva, sans-serif;
	line-height:2em;
}

td
{
	text-align:center;
	padding-bottom:20px;
}

.thumb3
{
	width:220px;
	box-shadow:#aaa 0 0 20px;
	-moz-box-shadow:#aaa 0 0 20px;
	-webkit-box-shadow:#aaa 0 0 20px;
}

.thumb2
{
	width:340px;
	box-shadow:#aaa 0 0 20px;
	-moz-box-shadow:#aaa 0 0 20px;
	-webkit-box-shadow:#aaa 0 0 20px;
}

.thumb2t
{
	height:425px;
	box-shadow:#aaa 0 0 20px;
	-moz-box-shadow:#aaa 0 0 20px;
	-webkit-box-shadow:#aaa 0 0 20px;
}

table
{
	 width:740px;
	 border:0;
