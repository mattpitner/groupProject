

var bands = [];
var bandName = "";
var city = "";

function displayBandInfo() {


    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" 
    + bandName + "&city=" + city + "&apikey=cBL4SnU5itvcXd4uhDb6raolj7gNc9co"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        var events = response._embedded.events;
        var image = response._embedded.events.image;

        response._embedded.events.forEach(function (event) {
            // console.log(event);
            appendEvent(event);

        });

    });
};


$("#submit").on("click", function (event) {
    event.preventDefault();
    bandName = $("#bandInput").val().trim();
    city = $("#location").val()
    // console.log(bandName);
    // console.log(city);
    var artist = $("#bandInput").val();
    artistSearched.push(artist);
    // console.log(artist);
    displaySuggestionInfo();
    displayBandInfo();
});


function appendEvent(event) {

    var eventName = event.name;
    var url = event.url;
    var imageURL = event.images[1].url;
    var image = "";

    for (i = 0; i < event.images.length; i++) {
        if (event.images[i].width > 600 && event.images[i].width < 800) {
            image = event.images[i]
            break;
        }

    }
    // console.log(image);


    $("#results").append(eventName);
    $("#results").append(url);
    $("#results").append("<image src=" + image.url + "></image><br>");

}


//===================
var artistSearched = [];

 var suggestion = [];

function displaySuggestionInfo() {

   
=======
var suggestion = [];


function displaySuggestionInfo() {

    // var suggestion = this.attr("Name");
    var queryURL = "https://tastedive.com/api/similar?q=" + artistSearched + "&k=332517-project1-8TB60H4T";

    $.ajax({
        url: queryURL,
        method: "GET",
        contentType: "application/json",
        dataType: "jsonp"
    }).then(function (response) {
        // console.log(response.Similar);

        console.log(response);
        // suggestion=[];
        // console.log(response.Similar.Results);
        for (var i = 0; i < response.Similar.Results.length; i++) {
            suggestion.push(response.Similar.Results[i].Name);
            $(".scrollBoxSuggestions").append("<p>Suggestions:" + response.Similar.Results[i].Name + "</p>");
           
        }
    });
    
}   
 


$("#submit").on("click", function (event) {
    event.preventDefault();
    bandName = $("#bandInput").val().trim();
    city = $("#location").val()
    // console.log(bandName);
    // console.log(city);
    var artist = $("#bandInput").val();
    artistSearched.push(artist);
    // console.log(artist);
    displaySuggestionInfo();
    displayBandInfo();
    // requeryTM();
=======
        // console.log(response);
        suggestion = [];
        // console.log(response.Similar.Results);
        for (var i = 0; i < 20; i++) {
            suggestion.push(response.Similar.Results[i].Name)
            $(".scrollBoxSuggestions").append("<p>Suggestions:" + response.Similar.Results[i].Name + "</p>");
            // console.log(response.Similar.Results[i].Name);
        }
        // console.log(suggestion);
        for (var i = 0; i < suggestion.length; i++) {
            // displayBandInfo.push(suggestion);
        }
    });
}

function rerunTicketMaster() {
    for (var i = 0; i < suggestion.length; i++) {
        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + bandName + "&city=" + city + "&apikey=cBL4SnU5itvcXd4uhDb6raolj7gNc9co"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response);
            $(".scrollBoxSuggestions").append("<p>From TM:" + response._embedded.events + "</p>");

        });

    };
}








