window.onload = function(){
  console.log('App started');
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  var countryNameList = [];
  var dropdown = document.getElementById('Countrylist')

  request.open('GET', url);
  
  request.onload = function() {
    if (request.status === 200) {
      console.log("got the data");
      countriesData = JSON.parse(request.responseText);
      
      
      for (var i = 0; i < countriesData.length; i++) {
        countryNameList.push(countriesData[i].name);
      };
      displayDropdown(countryNameList);
      //displayCountry(localStorage.getItem('Last country'));
    }
  }

  dropdown.onchange = function(){
    var countryName = this.value;
    var countryIndex = null;

    for(index in countryNameList){
      var testCountryName = countryNameList[index];
      if(testCountryName === countryName){
        var countryIndex = index;
        console.log(countryIndex);
        displayCountry(countryIndex);
      }
    }
  }

  

  request.send(null);

};

var displayDropdown = function(countryNameList) {
  for (var i = 0; i < countryNameList.length; i++) {
    
    var option = document.createElement("option");
    option.innerText = countryNameList[i];

    var select = document.querySelector("select");
    select.appendChild(option);
  };
}

var displayCountry = function(index){
  var section = document.getElementById('info')

  var name = countriesData[index]['name'];
  var capital = countriesData[index]['capital'];
  var population = countriesData[index]['population'];

  console.log(name, capital, population);

  //localStorage.setItem('Last country', index);

  var countryData = document.createElement('countryData')
  countryData.innerText = ('Country: ' + name + ' - Capital: ' + capital + ' - Population: ' + population + String.fromCharCode(13));

  section.appendChild(countryData);
}
