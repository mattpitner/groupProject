
var bands = [];
var bandName = "";
var city = "";



function displayBandInfo() {


    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + bandName + "&city=" + city + "&apikey=cBL4SnU5itvcXd4uhDb6raolj7gNc9co"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var events = response._embedded.events;
        var image = response._embedded.events.image;

        response._embedded.events.forEach(function (event) {
            console.log(event);
            appendEvent(event);

        });

    });
};

$("#submit").on("click", function (event) {
    event.preventDefault();
    bandName = $("#bandInput").val().trim();
    city = $("#location").val()
    console.log(bandName);
    console.log(city);
    displayBandInfo();


});

function appendEvent(event) {

    var eventName = event.name;
    var url = event.url;
    var imageURL = event.images[1].url;
    var image = "";

    for (i = 0; i < event.images.length; i++) {
        if (event.images[i].width > 600 && event.images[i].width < 1000) {
            image = event.images[i]
            break;
        }

    }
    console.log(image);


    $("#results").append(eventName);
    $("#results").append(url);
    $("#results").append("<image src=" + image.url + "></image>");

}

//========================//



var artistSearched = [];

function displaySuggestionInfo() {

    var suggestion = ""
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
        // console.log(response.Similar.Results);
        for (var i = 0; i < response.Similar.Results.length; i++) {
            $(".scrollBoxSuggestions").append("<p>Suggestions:" + response.Similar.Results[i].Name + "</p>");
            console.log(response.Similar.Results[i].Name);
        }
    });
//    

// if (response.Similar.Results[i].Name === TicketMasterArray[i].Artist){
//     $(".scrollBoxSuggestions").append("<p>Suggestions:" + response.Similar.Results[i].Name + "</p>")
 
//  }   else {
//     $(".scrollBoxSuggestions").append("<p> No upcoming Good shows </p>")
//  }
}
$(".btn").on("click", function (event) {

    event.preventDefault();

    var artist = $("#band-input").val();
    artistSearched.push(artist);
    console.log(artist);

    displaySuggestionInfo();

});














































