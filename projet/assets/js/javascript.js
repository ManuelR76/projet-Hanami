$("#Maki Mixte").hover(
    function(){
        $("#Maki Mixte").animate({
            fontSize: "3em",
        }, 300 )
    },
    function(){
        $(this).animate({
            fontSize: "1em"
        }, 100 );
    }
);
