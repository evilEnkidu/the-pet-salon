// start empty global array of services //
var services = [];

// Service Constructor //
function ServiceConstructor(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
}

//  execute starting services function at load//
window.onload = startingServices;

// hardcoded starting service nail clipping //
function startingServices(){
    var service1 = new ServiceConstructor("Nail Clipping", "We recycle your dogs nails", "15");
    services.push(service1);
    updateServiceSection();
    updateDropdown();
}

// read input that will go to service constructor //
function addService(){
    let name = $("#nameInput").val();
    let description = $("#descriptionInput").val();
    let price = $("#priceInput").val();
    if (price === "" || name === "" || description === "") {
        if ($('.error-container .error-message').length === 0) {
            $('.error-container').append('<h4 class="error-message">Please do not leave empty fields.</h4>');
        }
    } else {
        let newService = new ServiceConstructor(name, description, price);
        saveService(newService);
        services.push(newService);
        updateServiceSection();
        $('.error-container .error-message').remove(); // Remove error message if present
    }
    $('#service-form')[0].reset();
    return updateDropdown();
}

// update service section at start and each time a new service is added//
function updateServiceSection(){
    // clean .row so services don't duplicate.
    $('.row').empty();

    // loop through services 
    for (let i = 0; i < services.length; i++){
        var service = services[i];

        // create service element
        var $serviceDiv = $('<div>').addClass('service');
        var $heading = $('<h3>').text(service.name);
        var $description = $('<p>').text(service.description);
        var $price = $('<p>').addClass('price').text('$' + service.price);

        // append the elements to the service div
        $serviceDiv.append($heading, $description, $price);

        // append the service div to the row container
        $('.row').append($serviceDiv);
    }
}





