(function(){
'use strict';

// console.log(customers);


// function insertData(title, image, forename, surname, email, info){
//
//
//   var custInfo = `
//   <title>${title}</title>
//     <div class="container-fluid">
//       <div class="row_2">
//         <div class="col-md-3">
//           <img class='cust_photo' src="${image}" alt="">
//           <h3 class='name'>${forename} ${surname}</h3>
//           <h4 class='email'>${email}</h4>
//           <p class='cust_info'>${info}</p>
//         </div>
//         <div class="col-md-3">
//           <img class='cust_photo' src="" alt="">
//           <h3 class='name'>First Name</h3>
//           <h4 class='email'>email address</h4>
//           <p class='cust_info'>info</p>
//         </div>
//         <div class="col-md-3">
//           <img class='cust_photo' src="" alt="">
//           <h3 class='name'>First Name</h3>
//           <h4 class='email'>email address</h4>
//           <p class='cust_info'>info</p>
//         </div>
//         <div class="col-md-3">
//           <img class='cust_photo' src="" alt="">
//           <h3 class='name'>First Name</h3>
//           <h4 class='email'>email address</h4>
//           <p class='cust_info'>info</p>
//         </div>
//       </div>
//     </div>
//   `;
//   console.log(custInfo);
// }
// console.log(customers.results);


var empArray = customers.results;         //Main array//


//pulling out name data (title, first, last) & putting into array //
var nameArray = [];

empArray.forEach(function(item, counter){
  return nameArray.push(item.name)
});
// console.log(nameArray);


//formatting name data to title>first name>last name in array//
var fullArray= [];

fullArray.forEach(function(name){
  name = document.createElement('div');
  name.textContent = name[i];
});
console.log(fullArray);

nameArray.forEach(function(item, counter, originalArray){
  return fullArray.push(item.title + "." + " " + item.first + " " + item.last)
});
// console.log(fullArray);



//pulling out and putting email addresses into an array//
var emailArray= [];

emailArray.forEach(function(email){
  var email = document.createElement('h4');
  email.textContent = email[i];
});
console.log(emailArray);

empArray.forEach(function(item){
  return emailArray.push(item.email)
});
// console.log(emailArray);



//pulling out physical address info//
var locArray = [];

locArray.forEach(function(loc){
  var place = document.createElement('p');
  place.textContent = loc[i];
});
console.log(locArray);

empArray.forEach(function(item){
  return locArray.push(item.location.street + ' ' + item.location.city + ', ' + item.location.state + ', ' + item.location.postcode)
});
// console.log(locArray);



//pull phone number//
var numberArray = [];

numberArray.forEach(function(num){
  var phone = document.createElement('p');
  phone.textContent = num[i];
});
console.log(numberArray);

empArray.forEach(function(item, counter){
  return numberArray.push(item.cell)
});
// console.log(numberArray);


//pull images//
var picArray = [];

picArray.forEach(function(pic){
  var photo = document.createElement('img');
  photo.src = pic[i];
})
console.log(picArray);

empArray.forEach(function(item, counter){
  return picArray.push(item.picture.large)
});


////////////////////////////


// var profile = document.createElement('div');
var profile = picArray[0] + ' ' + fullArray[0] + ' ' + emailArray[0] + locArray[0] + numberArray[0];
console.log(profile);
console.log(fullArray[0]);
























}());
