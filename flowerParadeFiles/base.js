
$(document).ready(function(){
    //after the page has been loaded, this makes the mold of what our html yelled at underscore to make a mold of
    var flowerTemplate = _.template($('#flower-template').html());

    //tells the variables in the html that the keys they're looking for are within this object
    var flowerHtml = flowerTemplate(daisy);

    //prints out what has been made of the mold after the key hunters brought back the values of the keys they want
    $('#flowerRow').append(flowerHtml);
});
