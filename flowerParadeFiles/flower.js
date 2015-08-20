//Keeps track of the Flower constructor and flower
function Flower(color, petals, smellsPretty, origin){
    /* Properties */
    // Passed-in values
    this.color = color;
    this.petals = petals;
    this.smellsPretty = smellsPretty;
    this.origin = origin;

    // Default values
    this.isEdible = false;
    this.wiltFactor = 100; //0 is dead, 100 is fresh


    /* Methods */
    this.sniff = function(){
        console.log("Sniff Sniff Sniff!");
    };
    // Demonstrates use of arguments with methods
    this.smellsGood = function(answer) {
        if (answer) {
            return 'This flower smells amazing!';
        } else {
            return 'What a noxious weed!';
        }
    };
    // Demonstrates use of local object variables
    this.describe = function(answer) {
        alert("This flower is " + this.color + ".");
    }
    /// Demonstrates object to object interaction
    this.compare =  function(otherFlower) {
        return("My " + this.color + " flower is much prettier than your " +
        otherFlower.color + " flower :P");
    };
    // append html string to website
    this.render = function() {
        $('body').append("<p>My pretty flower is " + this.color +
            " and has " + this.petals + " pristine petals.");
    };
    // displays message to console
    this.giveFlower= function(){
        console.log("Here's a flower")
    };
}

//Constructing our flower. Adding properties
var daisy = new Flower('pink', 107, true, 'table 2');
daisy.image = 'http://i.imgur.com/HnT0QEo.jpg?1';
daisy.name = 'Daisy';
daisy.leafCount = 0;
daisy.comment = 'Swag';

