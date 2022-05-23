$("button").click(function(){
    let answer1 = $(".answer1").val();
    let answer2 = $(".answer2").val();
    let answer3 = $(".answer3").val();
    $(".fortune-display").text("If you keep practicing " + answer3 + " for " + answer2 + " hours per week, you will be hired by " + answer1);
});