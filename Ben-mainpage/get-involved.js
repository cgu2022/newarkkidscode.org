var Airtable = require('airtable');
// Get a base ID for an instance of art gallery example
var base = new Airtable({ apiKey: 'keyx4Nq3nXKpzNaE7' }).base('app1CezN5KSjro8Er');

$('#sing-up-btn').click(function(){
  var checked = [];
   $('input[name="roles"]:checked').each(function() {
      checked.push($(this).val());
   });
  console.log("works");
    base('Get_Involved').create({
        "First Name": $("#fname").val(),
        "Last Name": $("#lname").val(),
        "Address": $("#address").val(),
        "City": $("#city").val(),
        "State": $("#state").val(),
        "Zip Code": $("#zc").val(),
        "Home Phone": $("#hphone").val(),
        "Work Phone": $("#wphone").val(),
        "Best Contact Time": $("input[name='contact']:checked").val(),
        "Roles": checked
    }, function(err, record) {
        if (err) { console.log(err); return; }
    });
    popup();
    clear();
});

function popup() {
  $("#popup").animate({
    opacity:"1",
    top: "40vh"
  });

  setTimeout(function() {
    $("#popup").animate({
      opacity:"0",
      top: "-10vh"
    });
    console.log("cleared");
  }, 3000);
}

function clear() {
  $("#fname").val("");
  $("#lname").val("");
  $("#address").val("");
  $("#city").val("");
  $("#state").val("");
  $("#zc").val("");
  $("#hphone").val("");
  $("#wphone").val("");
  $("input[name='contact']").prop('checked', false);
  $("input[name='roles']").prop('checked', false);
  console.log("clear");
}
