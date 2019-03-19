
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








//create array of objects containing city and associated dma





































