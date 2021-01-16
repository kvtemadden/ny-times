jQuery(document).ready(function ($) {
    var apiKey = "0bCo4DL5DclPlLz8aPk80xZpphkoxJ36";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;


    $("#search-btn").on("click", function () {
        //setting everything fresh
        var userInput;
        var searchTerm = $("#search-term").val();    
        var noRecords = $("#no-records").val();
        var startYear = $("#start-year").val();
        var endYear = $("#end-year").val();

        //building user search into url
        if (searchTerm) {
            debugger;
            userInput = queryURL + "&q=" + searchTerm;
            
        }
        if (noRecords) {
            queryURL + noRecords;
        }
        if (startYear) {
            queryURL + searchTerm;
        }
        if (endYear) {
            queryURL + searchTerm;
        }

        //calling ap
        $.ajax({
            url: userInput,
            method: "GET"
        })
            .then(function (response) {
                debugger;
                console.log(response);
            });
    });



});