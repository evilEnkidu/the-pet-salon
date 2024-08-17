function saveService(item){
    let list = read(); // empty array [] or localStorage info, get the localStorage items (object or array)
    list.push(item); //push new item
    console.log(list);
    let val = JSON.stringify(list); // parses object into string
    console.log(val); // shows in console, we don't need an object, we need a string
    localStorage.setItem("newService", val); // sends val to the localStorage, under the newService key
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