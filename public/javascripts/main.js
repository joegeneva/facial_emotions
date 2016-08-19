var chartdata;
var positionloop;
$( "#start" ).click(function() {
  //data is gotten back from server
  positionloop = window.setInterval(function(){
    chartdata = {emotiondata:selectedVal,position:positions};
    $.post("/",chartdata,function( data ) {
    console.log( data);
    console.log("success!")
    }, "json")
    .fail(function(a,b,c) {
      console.log(b);
      console.log(c);
    })
  },1000);
});

$( "#stop" ).click(function() {
    window.clearInterval(positionloop);
});

//get value for chart
var selectedVal = "Happy";

$( "input[name=emotion]" ).change(function() {
  var selected = $("input[type='radio'][name='emotion']:checked");
  if (selected.length > 0) {
      selectedVal = selected.val();
      console.log(selectedVal);
  }
});
