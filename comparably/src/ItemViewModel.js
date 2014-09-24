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
        item.name = item.name || "?";
        this.facets = ko.observableArray();
        ko.mapping.fromJS(item, {}, this);
    };

    ItemViewModel.prototype.addFacet = function (facet) {
        facet.score = facet.score === undefined ? 50 : facet.score;
        this.facets.push(new ItemFacetViewModel(facet));
    }

    return ItemViewModel;
})();