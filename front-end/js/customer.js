
$(document).ready(function () {
    reset();
});


$("#newCustomer").click(function(){
    $("#btnSave").attr("disabled",false);
    $("#btnDelete").attr("disabled",false);
    $("#customerId").attr("disabled",false);
    $("#customerName").attr("disabled",false);
    $("#customerAddress").attr("disabled",false);

});

$("#btnSave").click(function(){
   
    //console.log( $("#customerId").val());
    var id= $("#customerId").val();
    var name=$("#customerName").val();
    var address=$("#customerAddress").val();

    // for(var i=0;);
   
    console.log($("#tblCustomer tbody tr").length);

    var html=`<tr>
            <th>${$("#tblCustomer tbody tr").length+1}</th>
            <td>${id}</td>
            <td>${name}</td>
            <td>${address}</td>
            <td style="width:60px;padding:0px"><div class="icon-delete"></div></td>
            </tr>`;

    $("tbody").append(html);

    $("#tblCustomer .icon-delete").off("click");
    $("#tblCustomer .icon-delete").click(function (eventData) {
    eventData.stopPropagation();
    
        $(this).fadeOut(500, function () {
            $(this).parents("tr").remove();
            // calculateTotal();
        });
    
    });

    $("#tblCustomer tbody tr").click(function(){
        var customerId=$(this).find("td:nth-child(2)").text();
        var customerName=$(this).find("td:nth-child(3)").text();
        var customerAddress=$(this).find("td:nth-child(4)").text();
        //console.log(customerId);
        $("#customerId").val(customerId);
        $("#customerName").val(customerName);
        $("#customerAddress").val(customerAddress);

        

    });

});


function reset(){
    $("#btnSave").attr("disabled",true);
    $("#btnDelete").attr("disabled",true);
    $("#customerId").attr("disabled",true);
    $("#customerName").attr("disabled",true);
    $("#customerAddress").attr("disabled",true);
}

