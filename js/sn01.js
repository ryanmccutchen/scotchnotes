(function(){
	
	var NavViewModel = function (){
		var self = this;
		self.navData = ko.observableArray([
			{ name: "Add a Review", link: "http://www.google.com"},
			{ name: "Scotch Catalog", link: "catalog.html"}
		]);
	}

	ko.applyBindings(new NavViewModel(), $('.navbar')[0]);

})();