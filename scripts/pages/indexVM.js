
var indexModule = (function() {
	var indexViewModel = function()	{
		var self = this;
		try {
			//Forms the page strucure
			self.posts = ko.observableArray([]);

			//Search item
			self.searchItem = ko.observable('');

			//Format it into observables
			self.retrievePosts = function(data)
			{
				try 
				{
					$.getJSON("http://localhost:8080/post/list", function(posts) { 

						// Setup post objects and add to list
						posts.map(function(post) {
							self.posts.push(new postModule.Post(post));
						});

					});
				}catch(e)
				{
					console.log(e)
				}
			};

			// Fetch data
			self.retrievePosts();
		}
		catch(e) 
		{
			console.log(e);
		}
	};

	return {
		indexViewModel: indexViewModel	  		
  	}
})();