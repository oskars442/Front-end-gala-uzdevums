$(document).ready(function () {
    $(".first").show();
    $(".second").hide();
    $(".third").hide();

    $("#nameday").click(function () {
        $(".first").show();
        $(".second").hide();
        $(".third").hide();
    });
    $("#name").click(function () {
        $(".first").hide();
        $(".second").show();
        $(".third").hide();
    });
    $("#week").click(function () {
        $(".first").hide();
        $(".second").hide();
        $(".third").show();
    });


    let countries = {
        "lv": "LV",
        "cz": "CZ",
        "sk": "SK",
        "pl": "PL",
        "fr": "FR",
        "hu": "HU",
        "hr": "HR",
        "se": "SE",
        "us": "US",
        "at": "AT",
        "it": "IT",
        "es": "ES",
        "de": "DE",
        "dk": "DK",
        "fi": "FI",
        "bg": "BG",
        "lt": "LT",
        "ee": "EE",
        "gr": "GR",
        "ru": "RU"
    };

  
    const countrySelect = $('#country');

    $.each(countries, function (key, value) {
        let $option = $("<option/>", {
            value: key,
            text: value
        });
        countrySelect.append($option);
    });



    
})
   
