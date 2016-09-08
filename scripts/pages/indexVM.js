
var indexModule = (function() {
	var indexViewModel = function()	{
		var self = this;
		try {
			//Forms the page strucure
			self.paragraphs = ko.observableArray([]);

			//Search item
			self.searchItem = ko.observable('');

			// var xmlHTTP = new XMLHttpRequest();
			// xmlHTTP.open("GET", "str1.xml", false);
			// xmlHTTP.send(null);
			
			// debugger;

			// var client = new XMLHttpRequest();
			// client.open('GET', '/foo.txt');
			// client.onreadystatechange = function() {
			//   alert(client.responseText);
			// }
			// client.send();

			// debugger;
			//Get the page structure
			// $.get( "http://localhost/favBook.git/trunk/scripts/pages/str1.xml", "", self.formatPage, "xml");

			//Format it into observables
			// self.formatPage = function(data)
			// {
			// 	try 
			// 	{
			// 		debugger;

			// 		$.ajax({
			// 		    type: "GET",
			// 		    url: "something.xml",
			// 		    dataType: "xml",
			// 		    success: function (xml) {

			// 		        // Parse the xml file and get data
			// 		        var xmlDoc = $.parseXML(xml),
			// 		            $xml = $(xmlDoc);
			// 		        $xml.find('category[name="My t"] logo').each(function () {
			// 		            $("#news-container").append($(this).text() + "<br />");
			// 		        });
			// 		    }
			// 		});
			// 		//debugger;
			// 		//try $.parseXML( xml );
			// 	}catch(e)
			// 	{
			// 		console.log(e)
			// 	}
			// };

			// self.formatPage();
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