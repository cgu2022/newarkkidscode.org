var Airtable = require('airtable');
// Get a base ID for an instance of art gallery example
var base = new Airtable({ apiKey: 'keyx4Nq3nXKpzNaE7' }).base('app1CezN5KSjro8Er');

let valid = false;

$('#sing-up-btn').click(function(){
  var checked = [];
   $('input[name="roles"]:checked').each(function() {
      checked.push($(this).val());
   });
  console.log("works");

  validate();
  if (valid) {

    base('Get_Involved').create({
        "First Name": $("#fname").val(),
        "Last Name": $("#lname").val(),
        "Address": $("#address").val(),
        "City": $("#city").val(),
        "State": $("#state").val(),
        "Zip Code": $("#zc").val(),
        "Email": $("#email").val(),
        "Cell Phone": $("#cphone").val(),
        "Best Contact Time": $("input[name='contact']:checked").val(),
        "Roles": checked,
        "Preferred Contact Method": $("input[name='contact-method']:checked").val()
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
    s_popup();
    clear();
  }
  else {
    e_popup();
  }
});

function validate() {
  if (($("#fname").val() != "") && ($("#lname").val() != "") && ($("#address").val() != "") && ($("#city").val() != "") && ($("#state").val() != "") && ($("#zc").val() != "") && ($("#email").val() != "") && ($("#cphone").val() != "")) {
    valid = true;
    return valid;
  }
  else {
    valid = false;
    return valid;
  }
}

function s_popup() {
  $("#s-popup").animate({
    opacity:"1",
    top: "40vh"
  });

  setTimeout(function() {
    $("#s-popup").animate({
      opacity:"0",
      top: "-10vh"
    });
    console.log("cleared");
  }, 3000);
}

function e_popup() {
  $("#e-popup").animate({
    opacity:"1",
    top: "40vh"
  });

  setTimeout(function() {
    $("#e-popup").animate({
      opacity:"0",
      top: "-10vh"
    });
    console.log("cleared");
  }, 3500);
}

function clear() {
  $("#fname").val("");
  $("#lname").val("");
  $("#address").val("");
  $("#city").val("");
  $("#state").val("");
  $("#zc").val("");
  $("#email").val("");
  $("#cphone").val("");
  $("input[name='contact']").prop('checked', false);
  $("input[name='roles']").prop('checked', false);
  $("input[name='contact-method']").prop('checked', false);
  console.log("clear");
}
