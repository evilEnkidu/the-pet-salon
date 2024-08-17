function saveService(item){
    let list = read(); // empty array [] or localStorage info, get the localStorage items (object or array)
    list.push(item); //push new item
    console.log(list);
    let val = JSON.stringify(list); // parses object into string
    console.log(val); // shows in console, we don't need an object, we need a string
    localStorage.setItem("newService", val); // sends val to the localStorage, under the newService key
    updateDropdown();
}

function read(){
    let data = localStorage.getItem("newService"); // read localStorage as a string
    if (!data){ //necessary condition to start the empty array at first, be sure to clean localStorage before
        // the first execution
        return []; // creates empty array during first execution
    }
    else{
        // this executes when we already have data in the localStorage
        let list = JSON.parse(data); // parse for converting the string into an array/object
        // return object/array
        return list;
    }
}

function updateDropdown(){
    // get dropdown element
    let dropdown = $("#serviceText");
    // clear existing options 
    dropdown.empty();

    // add initial hardcoded options
    dropdown.append('<option value="Checkup">Checkup</option>');
    dropdown.append('<option value="Grooming">Grooming</option>');
    dropdown.append('<option value="Boarding">Boarding</option>');
    dropdown.append('<option value="Nails">Nails</option>');

    // retrieve services from localStorage
    let services = read();

    // add new options dynamically
    for (let i = 0; i < services.length; i++) {
        let service = services[i];
        dropdown.append(`<option value="${service.name}">${service.name}</option>`);
    }
}

