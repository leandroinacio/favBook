utilModule = function() 
{
	
	var notifyLoad = function() 
	{
		$.notify("Loading...", "info");
	};

	var notifyFinish = function() 
	{
		//code to close loading
	}

	var notifyError = function(msg) 
	{
		$.notify(msg, "error");
	}
}();