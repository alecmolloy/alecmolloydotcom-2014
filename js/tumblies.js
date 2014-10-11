// v1.0 of Roller
// Note: to use Tumblr's API you have to register your application here: http://www.tumblr.com/oauth/apps
// Read more on v2 of the Tumblr API here: http://www.tumblr.com/docs/en/api/v2
var api_key = '6wh2KUA1fmBvcsmmJPs4AvfrbGgSBRK8Mx1z8gBkCIABPEY9e1';
var limit = 10;
var hostname = 'alecmolloy.tumblr.com'; // Your blog URL
var container = "main";

function post_inject(data) {
	$.each(data.response.posts, function(i,post){
		displayTextPost(post);
	});
}

jQuery.ajax({url: '//api.tumblr.com/v2/blog/alecmolloy.tumblr.com/posts/text?api_key=' + api_key + '&limit=' + limit + '&jsonp=post_inject', dataType: "jsonp"});

//Inject posts
function displayTextPost(posts){
	var date = posts.date
	if (posts.type === "text"){
		$(container).append('<article>' + '<h2>' + posts.title + '</h2>' + posts.body + '<a class="post_date" href="' + posts.post_url + '">' + posts.date.slice(0, -4), 'MMMM D, yyyy' + '</a>' + '</article>');
	}
}