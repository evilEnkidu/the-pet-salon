var pet1 = {
    petName : "Charro",
    age : 8,
	gender : "F",
	service : "Grooming",
	breed : "Boxer"
}
var pet2 = {
    petName : "Apollo",
	age : 7,
	gender : "M",
	service : "Check-up",
	breed : "German Sheperd"
}
var pet3 = {
    petName : "Gala",
	age : 2,
	gender : "F",
	service : "Check-up",
	breed : "Mixed"
}

var pets = [pet1, pet2, pet3];

// back to top button //
let toMainButton = document.getElementById("to-main");
window.onscroll = function(){
    scrollFunction();
} 

function scrollFunction(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        toMainButton.style.display = "block";
    }
    else{
        toMainButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Navigation Function //
$(document).ready(function() {
    $('#start').click(function() {
        // Scroll to section 1
        $('html, body').animate({
            scrollTop: $('#section1').offset().top
        }, 500, function() {
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $('#section2').offset().top
                }, 500, function() {
                    setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: $('#section3').offset().top
                        }, 1000);
                    }, 1000);
                });
            }, 1000);
        });
    });
});

// Show pet count in queue 
function showPetCount(){
    let petCount = pets.length;
    let button = document.getElementById("count-button");
    let h3 = document.createElement('h3');
    h3.textContent = petCount + ' PETS WAITING!';
    h3.id = "petCount";
    button.parentNode.replaceChild(h3, button);
}

// Show average age of pets in pets array 
function showAverageAge (){
    let totalAge = 0;
    for (let i = 0; i < pets.length; i++){
        totalAge += pets[i].age;
    }
    const averageAge = totalAge / pets.length;
    let button = document.getElementById("age-button");
    let h3 = document.createElement('h3');
    h3.textContent = parseFloat(averageAge).toFixed(1) + " YEARS";
    h3.id = "petAge";
    button.parentNode.replaceChild(h3, button)
    return true;
}

// Show pet names from pets array
function showPetNames(){
    let button = document.getElementById('name-button');
    let h3 = document.createElement('h3');
    h3.textContent = '';
    h3.id = "petNames";
   for (let i = 0; i < pets.length; i++){
    let span = document.createElement('span');
    span.textContent = pets[i].petName;
    h3.appendChild(span);
    h3.appendChild(document.createElement('br'));
   }
    
    button.parentNode.replaceChild(h3, button);
}