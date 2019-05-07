$("button").click(function(){
    var answer1 = $(".Q1").val();
    var answer2 = $(".Q2").val();
    
    if (answer1 === "power and wealth" && answer2 === "100") {
        $(".reveal").text("The Evil Stepmother from Cinderella");
        $(".Cinderella").show();
    }
    else if (answer1 === "power and wealth" && answer2 === "0") {
        $(".reveal").text("Maleficent from Sleeping Beauty");
        $(".Maleficent").show();
    }
    else if (answer1 === "manipulation and witchcraft" && answer2 === "100") {
        $(".reveal").text("The Evil Stepmother from Snow White");
        $(".SnowWhite").show();
    }
    else {
        $(".reveal").text("The Witch from Hansel and Gretal");
        $(".Witch").show();
    }
});


        
        