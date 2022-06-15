//Data Variables
var SkinColour = 0;
var Education = 0;
var Ability = 0;
var Sexuality = 0;
var Neurodiversity = 0;
var MentalHealth = 0;
var Body = 0;
var Housing = 0;
var Wealth = 0;
var Language = 0;
var Gender = 0;
var Citizenship = 0;


//Labels
const Labels = [
"Skin Colour", 
"Formal Education", 
"Ability", 
"Sexuality", 
"Neurodiversity", 
"Mental Health", 
"Body size", 
"Housing", 
"Wealth", 
"Language", 
"Gender", 
"Citizenship",
];



//Radar chart data
var radarData = {
  labels: Labels,
  datasets: [{
    data:  [SkinColour, Education, Ability, Sexuality, Neurodiversity, MentalHealth, Body, Housing, Wealth, Language, Gender, Citizenship],
	label: '', 
   	fill: false,
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    borderColor: 'rgb(255, 0, 0)',
    pointBackgroundColor: 'rgb(255, 0, 0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 0, 0)'
  }]
}

//Options
const radarOptions = {
        scale: {
  			min: 0,
  			max:3,
  			  ticks: {
     			 display: false,
     			  maxTicksLimit: 1,
  					 },
			},

  		plugins: {
            legend: {
                display: false,
            }
        }
    
};


const config = {
    type: 'radar',
    data: radarData,
    options: radarOptions,
};


//Create Radar chart
var chart = new Chart(document.getElementById("radarChart"), config);





//This works for to update each individual variable to the new radio value and then updates the chart
function updateForm() {
    var radios = document.getElementsByName('SkinColour');
    for (var radio of radios)
    {
        if (radio.checked) {
            SkinColour = radio.value;
        }
    }
    var radios = document.getElementsByName('Education');
    for (var radio of radios)
    {
        if (radio.checked) {
            Education = radio.value;
        }
    }
    var radios = document.getElementsByName('Ability');
    for (var radio of radios)
    {
        if (radio.checked) {
            Ability = radio.value;
        }
    }
    var radios = document.getElementsByName('Sexuality');
    for (var radio of radios)
    {
        if (radio.checked) {
            Sexuality = radio.value;
        }
    }
    var radios = document.getElementsByName('Neurodiversity');
    for (var radio of radios)
    {
        if (radio.checked) {
            Neurodiversity = radio.value;
        }
    }
    var radios = document.getElementsByName('MentalHealth');
    for (var radio of radios)
    {
        if (radio.checked) {
            MentalHealth = radio.value;
        }
    }
    var radios = document.getElementsByName('Body');
    for (var radio of radios)
    {
        if (radio.checked) {
            Body = radio.value;
        }
    }
    var radios = document.getElementsByName('Housing');
    for (var radio of radios)
    {
        if (radio.checked) {
            Housing = radio.value;
        }
    }
    var radios = document.getElementsByName('Wealth');
    for (var radio of radios)
    {
        if (radio.checked) {
            Wealth = radio.value;
        }
    }
    var radios = document.getElementsByName('Language');
    for (var radio of radios)
    {
        if (radio.checked) {
            Language = radio.value;
        }
    }
    var radios = document.getElementsByName('Gender');
    for (var radio of radios)
    {
        if (radio.checked) {
            Gender = radio.value;
        }
    }
    var radios = document.getElementsByName('Citizenship');
    for (var radio of radios)
    {
        if (radio.checked) {
            Citizenship = radio.value;
        }
    }
    chart.data.datasets[0].data = [SkinColour, Education, Ability, Sexuality, Neurodiversity, MentalHealth, Body, Housing, Wealth, Language, Gender, Citizenship];
  	chart.update();
}

/*

//Attempting to get it to work on all the radios as a loop 
function updateForm() {
    var radios = document.getElementsByTagName('input');
    for (i = 0; i < radios.length; i++)
    {
        if (radios[i].checked) {
            alert(radios[i].name+' = '+radios[i].value);
            radios[i].name = radios[i].value;
            chart.data.datasets[0].data = [SkinColour, Education, Ability, Sexuality, Neurodiversity, MentalHealth, Body, Housing, Wealth, Language, Gender, Citizenship];
  			chart.update();
        }
    }
}


*/





