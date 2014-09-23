window.ItemViewModel = (function () {
    var ItemFacetViewModel = (function () {
        function ItemFacetViewModel(itemFacet) {
            this.description = ko.observable();
            this.score = ko.observable();
            ko.mapping.fromJS(itemFacet, {}, this);
        }

        return ItemFacetViewModel;
    })();

    var ItemViewModel = function ItemViewModel(item) {
        this.name = ko.observable();
        this.facets = ko.observableArray();
        ko.mapping.fromJS(item, {}, this);
    };

    ItemViewModel.prototype.addFacet = function (facet) {
        this.facets.push(new ItemFacetViewModel(facet));
    }

    return ItemViewModel;
})();