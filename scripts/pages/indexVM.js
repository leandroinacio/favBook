indexModule = function() {
	var indexViewModel = function() {
		var self = this;
		try 
		{
			self.teste = ko.observable('');
		}
		catch(e) 
		{
			debugger;
			console.log(e);
		}
	};

	return {
		indexViewModel: indexViewModel
	};
}();