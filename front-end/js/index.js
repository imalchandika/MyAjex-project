$(document).ready(function () {


    var ajaxConfig={
        method: "HEAD",
        url :"http://localhost:3000/api/v1/customers",
        async:true,
        // contentType:"application/x-www-form-urlencoded"
        // data :$("form").serialize()

    };

    $.ajax(ajaxConfig).done(function (CUTOMERS,statusText,jxhr) {
        console.log("Success");
        // console.log(CUTOMERS);
        console.log(jxhr.getResponseHeader("X-Count"));
        $("#cusNo").text(jxhr.getResponseHeader("X-Count"));

        // console.log(jxhr);


    }).fail(function (jxhr,statusText,error) {
        console.log("fails");
        console.log(statusText);
        console.log(error);
        console.log(jxhr.responseText);
    });



});