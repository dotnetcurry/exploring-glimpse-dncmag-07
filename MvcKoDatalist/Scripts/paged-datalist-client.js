/// <reference path="_references.js" />

$(document).ready(function ()
{
    vm = null;
    loadPage(1, 5);
    $(document).delegate("#prevPageButton", "click", previousPage);
    $(document).delegate("#nextPageButton", "click", nextPage);
    $(document).delegate("#rowsPerPage", "change", pageSizeChanged);
});

var loadPage = function (pageNumber, pageSize)
{
    $.ajax({
        url: "/TimeCard/Index?pageNumber=" + pageNumber + "&pageSize=" + pageSize,
        type: "POST",
        success: function (data)
        {
            if (vm == null)
            {
                vm = new viewModel(data);
                ko.applyBindings(vm);
                return data.Data.length;
            }
            else
            {
                vm.pageData(ko.observableArray());
                vm.pageData(ko.mapping.fromJS(data.Data));
                return data.Data.length;
            }
        }
    });
}

var previousPage = function (data)
{
    if (!vm.isFirstPage())
    {
        vm.currentPage(vm.currentPage() - 1);
        loadPage(vm.currentPage(), vm.pageSize());
    }
}

var nextPage = function (data)
{
    if (!vm.isLastPage())
    {
        vm.currentPage(vm.currentPage() + 1);
        loadPage(vm.currentPage(), vm.pageSize());
    }
}

var pageSizeChanged = function (data)
{
    if (vm.pageSize() != $("#rowsPerPage").val())
    {
        vm.pageSize($("#rowsPerPage").val());
        vm.currentPage(1);
        loadPage(vm.currentPage(), vm.pageSize());
    }
}