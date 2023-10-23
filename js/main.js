$(".openNav").click(function(){
    $("#leftMenu").css("left","0")
    $(".openNav").css("left","260px")
})
$(".closebtn").click(function(){
    $("#leftMenu").css("left","-250px")
    $(".openNav").css("left","10px")
})
$("#sliderDown h3").click(function(){
    $(this).next().slideToggle();
    $("#sliderDown div").not($(this).next()).slideUp();
})
$("textarea").keyup(function(){
    let mylength = $(this).val().length;
    $("#chars").text(
        100 - mylength <= 0 ? "is not available more" : 100 - mylength
    )
})



let countDownDate = new Date("aug 30, 2023 20:00:00").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
      
    var distance = countDownDate - now;
      
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      

    document.getElementById("counter").innerHTML = `
    
        <div class="col-md-3 border-3 border-white-3 py-5">
            <span id="day">${days} D</span>
        </div>
        <div class="col-md-3 border-white border-white-3 py-5">
            <span id="hour">${hours} H</span>
        </div>
        <div class="col-md-3 border-white border-white-3 py-5">
            <span id="mins">${minutes} M</span>
        </div>
        <div class="col-md-3 border-white border-white-3 py-5">
            <span id="secs">${seconds} S</span>
        </div>
        
        `
   
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  
  
  
  
  
  
  
  
  
  
  
