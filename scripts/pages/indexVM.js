indexModule = function() {
	var indexViewModel = function() 
	{
		var self = this;
		try 
		{
			//Observable array that forms the page strucure
			self.paragraphs = ko.observableArray([]);

			//Get the page structure
			$.get( "structures/str1.xml", self.formatPage);

			//Format it into observables
			self.formatPage = function(data)
			{
				try 
				{
					//try $.parseXML( xml );
				}catch(e)
				{
					console.log(e)
				}
			};
		}
		catch(e) 
		{
			debugger;
			console.log(e);
		}
	};

	return 
	{
		indexViewModel: indexViewModel
	};
}();