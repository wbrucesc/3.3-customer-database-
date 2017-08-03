(function(){
'use strict';

console.log(customers.results);



var appContainer = document.querySelector(".wrapper");

for(var i = 0; i < customers.results.length; i++){

// variables listed for different customer information properties//
  var photo = customers.results[i].picture.large;

  var fullName = customers.results[i].name.first + ' ' + customers.results[i].name.last;

  var email = customers.results[i].email;

  var address = customers.results[i].location.street + ' ' + customers.results[i].location.city + ', ' + customers.results[i].location.state + ', ' + customers.results[i].location.postcode;

  var number = customers.results[i].cell;

  var ssn = customers.results[i].id.value;
  // console.log(number);

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

  appContainer.innerHTML += template;

}





















}());
