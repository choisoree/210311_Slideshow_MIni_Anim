$(function () {

    setInterval(sample, 3000);

    function sample() {



        $("#innerFrame").animate({
                "margin-left": "-200px"
            },
            2000,
            "swing",
            function () {
                $("span:first-child").insertAfter("span:last-child");
                $("#innerFrame").css({"margin-left": "0"});
            }
        );
    }

});
