util = {
	
	notifyLoad: function() 
	{
		$.notify("Loading...", "info");
	},

	notifyFinish: function() 
	{
		//code to close loading
	},

	notifyError: function(msg) 
	{
		$.notify(msg, "error");
	}
};
