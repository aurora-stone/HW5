
$(function () {
  
  
  $(".saveBtn").click(function () {
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")

    localStorage.setItem(time, value)
  }) 
  for(var i = 9; i < 18; i++){
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
  }
 
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1])
    var currentTime = dayjs().hour()
    if (blockHour < currentTime){
      $(this).addClass("past")
    } else if (blockHour === currentTime){
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }
  })
  
  $("#currentDay").text(dayjs().format("dddd MMMM D YYYY"))
});
