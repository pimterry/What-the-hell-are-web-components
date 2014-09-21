window.FacetViewModel = (function () {
    var FacetViewModel = function FacetViewModel(facet) {
        this.name = ko.observable();
        ko.mapping.fromJS(facet, {}, this);
    };

    return FacetViewModel;
})();