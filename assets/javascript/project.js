
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
    // TicketMasterArray[i].Artits is array of all artists performing in the searched area
// that ticket master has on record
// if (response.Similar.Results[i].Name === TicketMasterArray[i].Artist){
//     $(".scrollBoxSuggestions").append("<p>Suggestions:" + response.Similar.Results[i].Name + "</p>")
 
//  }   else {
//     $(".scrollBoxSuggestions").append("<p> No upcoming Good shows </p>")
//  }
}
$(".btn").on("click", function (event) {

    event.preventDefault();

    var artist = $("#band-input").val().trim();
    artistSearched.push(artist);
    console.log(artist);

    displaySuggestionInfo();

});
