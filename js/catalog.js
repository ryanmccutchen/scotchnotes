(function(){
	
	var CatalogViewModel = function (){
		var self = this;

		self.items = ko.observableArray([
			{id:001, name:"Whisky 01", rating:3, brand:"Arbeg", description: "Fucking shit is good"}

			]);

	}

	ko.applyBindings(new CatalogViewModel(), $('#cat-list')[0]);

})();