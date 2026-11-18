var people = [];

function get_input() {
    var newName = document.getElementById("name").value;
    var newEmail = document.getElementById("email").value;
    var newPhoneNumber = document.getElementById("phone").value;
    var newAdress = document.getElementById("adress").value;
    var newReview1 = document.getElementById("review1").value;
    var newReview2 = document.getElementById("review2").value;
    var newReview3 = document.getElementById("review3").value;
    var newReview = (newReview1+newReview2+newReview3)/3;
}

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Standard inputs via FormData
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Range inputs need to be added manually (or just grab them directly)
  data.experience = parseFloat(document.getElementById('review1').value);
  data.price = parseFloat(document.getElementById('review2').value);
  data.attitude = parseFloat(document.getElementById('review3').value);

  // Log the complete object
  console.log('Form Data:', data);
  console.log('Name:', data.name);
  console.log('Email:', data.email);
  console.log('Phone:', data.phone);
  console.log('Address:', data.address);
  console.log('Experience:', data.experience);
  console.log('Price:', data.price);
  console.log('Attitude:', data.attitude);
});