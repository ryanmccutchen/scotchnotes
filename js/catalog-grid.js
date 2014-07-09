 $(document).ready(function () {
            // get data.
            var url = "js/catalog.json";
            var dataSource =
            {
                datatype: "json",
                datafields: [
                    { name: 'name' },
                    { name: 'rating' },
                    { name: 'brand'},
                    { name: 'description' },
                ],
                id: 'id',
                url: url
            };
            var dataAdapter = new $.jqx.dataAdapter(dataSource, { autoBind: true, async: false });
            // create model.
            var GridModel = function (items) {
                this.items = ko.observableArray(items);
            };
            // activate knockout.
            var model = new GridModel(dataAdapter.records);
            ko.applyBindings(model);
            // bind grid to the knockout's observable array.
            var source = {
                localdata: model.items,
                datatype: 'local'
            }    
            // create jqxGrid.
            $("#jqxgrid").jqxGrid(
            {
                source: source,
                autoheight: true,
                pageable: true,
                columns: [
                  { text: 'Name', datafield: 'name', width: 250 },
                  { text: 'Rating', datafield: 'rating', width: 25 },
                  { text: 'Brand', datafield: 'brand', width: 180 },
                  { text: 'Description', datafield: 'description', width: 320 }
               ]
            });
});
