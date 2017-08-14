(function(){
'use strict';

console.log(customers.results);


var appContainer = document.querySelector(".wrapper");
var data = customers.results;

data.forEach(function(person, i){
  var photo = person.picture.large;
  var fullName = person.name.first + ' ' + person.name.last;
  var email = person.email;
  var address = person.location.street + ' ' + person.location.city + ', ' + person.location.state + ', ' + person.location.postcode;
  var number = person.cell;
  var ssn = person.id.value;


// template literal puts it all in structure

var template = `

  <div class="col-md-3>
    <div class="row">
      <div class="thumbnail">
        <img src="${photo}" alt="...">

          <h2>${fullName}</h2>
          <h3>${email}</h3>
          <p>${address}</p>
          <p>${number}</p>
          <span>${ssn}</span>
      </div>
    </div>
  </div>
  `;

appContainer.innerHTML = appContainer.innerHTML + template;
});


}());


// for(var i = 0; i < data.length; i++){

// variables listed for different customer information properties//
  // var photo = data[i].picture.large;
  //
  // var fullName = data[i].name.first + ' ' + data[i].name.last;
  //
  // var email = data[i].email;
  //
  // var address = data[i].location.street + ' ' + data[i].location.city + ', ' + data[i].location.state + ', ' + data[i].location.postcode;
  //
  // var number = data[i].cell;
  //
  // var ssn = data[i].id.value;
  // console.log(number);

  // }
