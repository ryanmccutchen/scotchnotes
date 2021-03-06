(function(){
	
	var CatalogViewModel = function (){
		var self = this;


		self.load = function(){
			$.getJSON('js/catalog.json', null,function(results, textStatus, jqXHR){
				$(results).each(function(){
					self.items.push(this);
				});
			}).fail(function(one,two,three){
				debugger;
			});
		};

		self.items = ko.observableArray([]);
		self.style = ko.observable("card");
		self.styles = ko.observableArray(["list","card"]);
		self.load();

	}

	ko.applyBindings(new CatalogViewModel(), $('#catalog')[0]);

})();