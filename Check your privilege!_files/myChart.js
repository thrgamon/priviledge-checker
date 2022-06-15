//Labels
// Here we store the labels as an object, where we can store key/value pairs.
// This means we can correspond a particular label, with a particular value,
// without having to track both seperately.
// You will notice I relabelled the inputs in the html to match the labels here.
// You will see why in a second.
const Labels = {
"Skin Colour": 0,
"Formal Education": 0,
"Ability": 0,
"Sexuality": 0,
"Neurodiversity": 0,
"Mental Health": 0,
"Body Size": 0,
"Housing": 0,
"Wealth": 0,
"Language": 0,
"Gender": 0,
"Citizenship": 0,
};


//Radar chart data
var radarData = {
  // Now our labels is an object, we can use this Object.keys() function
  // to grab all the keys, aka all the labels.
  labels: Object.keys(Labels),
  datasets: [{
    // Similarly we can grab all the values
    data: Object.values(Labels),
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


function updateForm() {
  // We grab the labels from Labels again
  labels = Object.keys(Labels)
  // We iterate through each label, passing it into our function
  labels.forEach(label => {
    // We query the document for any input, with the name matching our label,
    // that is checked. Then we grab the value.
    // The backticks with the ${var} is called string interpolation - putting
    // one string inside another.
    value = document.querySelector(`input[name="${label}"]:checked`).value;

    // Now we have the value we can reset that value in our Labels object.
    // What we are basically saying is that for this key, in this object,
    // set the value to the variable.
    Labels[label] = value
  });
  // Again, we just grab all the values, which will have been updated by line
  // 87
  chart.data.datasets[0].data = Object.values(Labels);
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





