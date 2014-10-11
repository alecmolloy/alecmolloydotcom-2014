// v1.0 of Roller
// Note: to use Tumblr's API you have to register your application here: http://www.tumblr.com/oauth/apps
// Read more on v2 of the Tumblr API here: http://www.tumblr.com/docs/en/api/v2

var hostname = 'alecmolloy.tumblr.com'; // Your blog URL
var container = "main";

//Call Tumblr for post data in JSON format
/*
$.getJSON('http://api.tumblr.com/v2/blog/' + hostname + '/posts' + post_type + '?api_key=' + api_key + '&limit=' + limit + '&notes_info=true', function(data) {
	$.each(data.posts, function(i,posts){
		displayTextPost(posts);
	});
});
*/

var jsonpcallback = function(data) {
	$.each(data.posts, function(i,posts){
		displayTextPost(posts);
	});
}

$.ajax({
	type: 'GET',
	url: 'http://api.tumblr.com/v2/blog/' + hostname + '/posts',
	datatype: 'jsonp',
	data: {
		api_key : '6wh2KUA1fmBvcsmmJPs4AvfrbGgSBRK8Mx1z8gBkCIABPEY9e1',
		type: '',
		tag: '',
		limit : 10,
		jsonp :	'jsonpcallback'
		}
	});

//Inject posts
function displayTextPost(posts){
	if(posts === null){ return;}
	$(container).append('<article>');
	$(container).append('<h2>' + posts['regular-title'] + "</h2>");
	$(container).append(posts['regular-body']);
	$(container).append('<a class="post_date" href="' + posts['url'] + '">' + posts['timestamp'] + '</a>');
	$(container).append('</article>');
}