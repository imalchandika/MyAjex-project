
$(document).ready(function () {

    $("#tblContainer").css("overflow", "scroll");

    var ajaxConfig={
        method: "GET",
        url :"http://localhost:3000/api/v1/customers",
        async:true,
        contentType:"application/x-www-form-urlencoded",
        data :$("form").serialize()



    };

    $.ajax(ajaxConfig).done(function (CUTOMERS,statusText,jxhr) {
        console.log("Success1111");
        // console.log(CUTOMERS);

        for(var i=0;i<CUTOMERS.length;i++){

            var id= CUTOMERS[i].id;
            var name=CUTOMERS[i].name;
            var address=CUTOMERS[i].address;
            var salary=CUTOMERS[i].salary;

            // for(var i=0;);

            // console.log($("#tblCustomer tbody tr").length);

            var html=`<tr>
            <th>${$("#tblCustomer tbody tr").length+1}</th>
            <td>${id}</td>
            <td>${name}</td>
            <td>${address}</td>
              <td>${salary}</td>
            <td style="width:60px;padding:0px"><div class="icon-delete"></div></td>
            </tr>`;

            $("tbody").append(html);
        }
        $("#tblContainer").css("overflow","scroll");

        // console.log(jxhr.getResponseHeader("X-Count"));
        // $("#cusNo").text(jxhr.getResponseHeader("X-Count"));

        // console.log(jxhr);

        $("#tblCustomer tbody tr").click(function(){

            console.log("imal");
            var customerId=$(this).find("td:nth-child(2)").text();
            var customerName=$(this).find("td:nth-child(3)").text();
            var customerAddress=$(this).find("td:nth-child(4)").text();
            var customerSalary=$(this).find("td:nth-child(5)").text();
            //console.log(customerId);

            $("#customerId").val(customerId);
            $("#customerName").val(customerName);
            $("#customerAddress").val(customerAddress);
            $("#customerSalary").val(customerSalary);



        });

        $("#tblCustomer .icon-delete").off("click");
        $("#tblCustomer .icon-delete").click(function (eventData) {
            console.log($(this).parents("tr").find("td:nth-child(2)").text());
            var customeeId=$(this).parents("tr").find("td:nth-child(2)").text();

            eventData.stopPropagation();

            if(confirm("are oyu sure detele this customer"));
            {
                var ajaxConfig = {
                    method: "DELETE",
                    url: "http://localhost:3000/api/v1/customers/" + customeeId,
                    async: true
                    // contentType:"application/x-www-form-urlencoded",
                    // data :$("form").serialize()
                };
                $.ajax(ajaxConfig).done(function (CUTOMERS, statusText, jxhr) {
                    // if(confirm("are oyu sure detele this customer"));{
                    //     $(this).fadeOut(500, function () {
                    // console.log("imal")
                    // $(this).parents("tr").remove();
                            // calculateTotal();
                        // });


                }).fail(function (jxhr, statusText, error) {
                    console.log("fails");
                    console.log(jxhr.responseText);
                });

            }
                $(this).fadeOut(500, function () {
            $(this).parents("tr").remove();

            });

        });




    }).fail(function (jxhr,statusText,error) {
        console.log("fails");
        console.log(statusText);
        console.log(error);
        console.log(jxhr.responseText);
    });
    reset();




});


   $("#newCustomer").click(function(){
    $("#btnSave").attr("disabled",false);
    $("#btnDelete").attr("disabled",false);
    $("#customerId").attr("disabled",false);
    $("#customerName").attr("disabled",false);
    $("#customerAddress").attr("disabled",false);
       $("#customerSalary").attr("disabled",false);

});

$("#btnSave").click(function(){

    var customer = {
        id: $("#customerId").val(),
        name: $("#customerName").val(),
        address: $("#customerAddress").val(),
        salary:$("#customerSalary").val()
    };

    var ajaxConfig={
        method: "POST",
        url :"http://localhost:3000/api/v1/customers",
        async:true,
        contentType:"application/json",
        data: JSON.stringify(customer)

    };

    $.ajax(ajaxConfig).done(function (CUTOMERS,statusText,jxhr) {
        console.log("Successsaafcd");

        var id= $("#customerId").val();
        var name=$("#customerName").val();
        var address=$("#customerAddress").val();
        var salary=$("#customerSalary").val()
        //
        // // for(var i=0;);
        //
        // console.log($("#tblCustomer tbody tr").length);
        //
        var tblcount=$("#tblCustomer tbody tr").length;
        tblcount++;
        var html=`<tr>
                        <td><strong>${tblcount}</strong></td>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${address}</td>
                        <td>${salary}</td>
                         <td style="width:60px;padding:0px"><div class="icon-delete"></div></td>
                   </tr>`


       $("tbody").append(html);
        // console.log(CUTOMERS);
        // console.log(statusText);
        // console.log(jxhr);


    }).fail(function (jxhr,statusText,error) {
        console.log("fails");
        console.log(statusText);
        console.log(error);
        console.log(jxhr.responseText);
    });
});


function reset(){
    $("#btnSave").attr("disabled",true);
    $("#btnDelete").attr("disabled",true);
    $("#customerId").attr("disabled",true);
    $("#customerName").attr("disabled",true);
    $("#customerAddress").attr("disabled",true);
    $("#customerSalary").attr("disabled",true);
}

