
$(document).ready(function () {

    $("#tblContainer").css("overflow", "scroll");

    var ajaxConfig={
        method: "GET",
        url :"http://localhost:3000/api/v1/items",
        async:true,
        contentType:"application/x-www-form-urlencoded",
        data :$("form").serialize()



    };

    $.ajax(ajaxConfig).done(function (ITEMS,statusText,jxhr) {
        console.log("Success1111");
        console.log(ITEMS);

        for(var i=0;i<ITEMS.length;i++){

            var code= ITEMS[i].code;
            var description=ITEMS[i].description;
            var unitPrice=ITEMS[i].unitPrice;
            var qtyOnHand=ITEMS[i].qtyOnHand;

            // for(var i=0;);

            // console.log($("#tblCustomer tbody tr").length);

            var html=`<tr>
            <th>${$("#tblItem tbody tr").length+1}</th>
            <td>${code}</td>
            <td>${description}</td>
            <td>${unitPrice}</td>
              <td>${qtyOnHand}</td>
            <td style="width:60px;padding:0px"><div class="icon-delete"></div></td>
            </tr>`;

            $("tbody").append(html);
        }
        $("#tblContainer").css("overflow","scroll");

        // console.log(jxhr.getResponseHeader("X-Count"));
        // $("#cusNo").text(jxhr.getResponseHeader("X-Count"));

        // console.log(jxhr);

        $("#tblItem tbody tr").click(function(){

            // console.log("imal");
            var code=$(this).find("td:nth-child(2)").text();
            var discription=$(this).find("td:nth-child(3)").text();
            var unitPrice=$(this).find("td:nth-child(4)").text();
            var qtyOnHand=$(this).find("td:nth-child(5)").text();
            //console.log(customerId);

            $("#code").val(code);
            $("#discription").val(discription);
            $("#unitPrice").val(unitPrice);
            $("#qtyOnHand").val(qtyOnHand);



        });

        $("#tblItem .icon-delete").off("click");
        $("#tblItem .icon-delete").click(function (eventData) {
            console.log($(this).parents("tr").find("td:nth-child(2)").text());
            var itemCode=$(this).parents("tr").find("td:nth-child(2)").text();

            eventData.stopPropagation();

            if(confirm("are oyu sure detele this item"));
            {
                var ajaxConfig = {
                    method: "DELETE",
                    url: "http://localhost:3000/api/v1/items/" + itemCode,
                    async: true
                    // contentType:"application/x-www-form-urlencoded",
                    // data :$("form").serialize()
                };
                $.ajax(ajaxConfig).done(function (ITEMS, statusText, jxhr) {
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


$("#newItem").click(function(){
    $("#btnSave").attr("disabled",false);
    $("#btnDelete").attr("disabled",false);
    $("#code").attr("disabled",false);
    $("#discription").attr("disabled",false);
    $("#unitPrice").attr("disabled",false);
    $("#qtyOnHand").attr("disabled",false);

});

$("#btnSave").click(function(){

    var item = {
        code: $("#code").val(),
        description: $("#discription").val(),
        unitPrice: $("#unitPrice").val(),
        qtyOnHand:$("#qtyOnHand").val()
    };

    var ajaxConfig={
        method: "POST",
        url :"http://localhost:3000/api/v1/items",
        async:true,
        contentType:"application/json",
        data: JSON.stringify(item)

    };

    $.ajax(ajaxConfig).done(function (ITEMS,statusText,jxhr) {
        console.log("Successsaafcd");
        var code=$("#code").val();
        var description=$("#discription").val();
       var unitPrice=$("#unitPrice").val();
        var qtyOnHand=$("#qtyOnHand").val();

        // for(var i=0;);

        // console.log($("#tblCustomer tbody tr").length);

        var html = `<tr>
            <th>${$("#tblItem tbody tr").length + 1}</th>
            <td>${code}</td>
            <td>${description}</td>
            <td>${unitPrice}</td>
              <td>${qtyOnHand}</td>
            <td style="width:60px;padding:0px"><div class="icon-delete"></div></td>
            </tr>`;

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
    $("#code").attr("disabled",true);
    $("#discription").attr("disabled",true);
    $("#unitPrice").attr("disabled",true);
    $("#qtyOnHand").attr("disabled",true);
}

