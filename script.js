jQuery(document).ready(function ($) {
    var apiKey = "0bCo4DL5DclPlLz8aPk80xZpphkoxJ36";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;


    $("#search-btn").on("click", function () {
        //setting everything fresh
        var searchTerm = $("#search-term").val();    
        // var noRecords = $("#no-records").val();
        var startYear = $("#start-year").val();
        var endYear = $("#end-year").val();

        //building user search into url
        if (searchTerm) {
            queryURL + "&q=" + searchTerm;
            
        }
        // if (noRecords) {
        //     queryURL + noRecords;
        // }
        if (startYear) {
            queryURL + "&begin_date=" + startYear;
        }
        if (endYear) {
            queryURL + "&end_date=" + endYear;
        }

        //calling ap
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
            });
    });



});