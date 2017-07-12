// Load SVG signature via jQuery
$("#signature").load("img/signature3.svg", function(response) {
  if (!response) {
    console.log('ERROR!');
  }
    
});

// Trigger signature when user scrolls to SVG
var signature = $('#signature');
var waypoint = new Waypoint({
  element: signature,
  handler: function(){
    signature.addClass('active');
    console.log("signing off...")
  },
  offset: 'bottom-in-view',
});

// Email injected via JS to prevent spam
$('#email-trigger').on('click', function(){
  var name = 'johnludena';
  var domain = 'gmail.com';
  $(this).attr('href', 'mail' + 'to:' + name + '@' + domain);
});


