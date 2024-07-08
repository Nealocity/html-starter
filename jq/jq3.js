$(document).ready(function() {
    $('.btn.btn-primary.me-2').click(function() {
        var newRow = '<tr>';
        var nextOrderId = 1;
        $('.table tbody tr').each(function(){
            var currentOrderId = parseInt($(this).find('td:first').text());
            if(currentOrderId > nextOrderId) {
                nextOrderId = currentOrderId + 1;
            }
        });
        newRow += '<td><input type="text" class="orderIdInput" style="color:grey" value="' + nextOrderId + '" onfocus="if(this.value==\'OrderId\'){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=\'' + nextOrderId + '\'}" /></td>';
        newRow += '<td><input type="text" class="orderValueInput" style="color:grey" value="Value" onfocus="if(this.value==\'Value\'){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=\'Value\'}" /></td>';
        newRow += '<td><input type="text" class="orderQuantityInput" style="color:grey" value="Quantity" onfocus="if(this.value==\'Quantity\'){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=\'Quantity\'}" /></td>';
        newRow += '<td><button class="addOrderButton btn btn-sm btn-primary">Add</button><button class="deleteOrderButton btn btn-sm btn-danger">Delete</button></td>';
        newRow += '</tr>';

        $('.table tbody').prepend(newRow);
    });

    $(document).on('click', '.addOrderButton', function() {
        var orderId = $(this).closest('tr').find('.orderIdInput').val();
        var orderValue = $(this).closest('tr').find('.orderValueInput').val();
        var orderQuantity = $(this).closest('tr').find('.orderQuantityInput').val();

        var newRow = '<tr>';
        newRow += '<td><label>' + orderId + '</label></td>';
        newRow += '<td><label>' + (orderValue.indexOf('$') === -1 ? '$' + orderValue : orderValue) + '</label></td>';
        newRow += '<td><label>' + orderQuantity + '</label></td>';
        newRow += '<td><button class="editOrderButton btn btn-sm btn-primary">Edit</button><button class="deleteOrderButton btn btn-sm btn-danger">Delete</button></td>';
        newRow += '</tr>';

        $(this).closest('tr').replaceWith(newRow);
    });

//Implement "Save" feature. Once clicked. all the data should be stored in the "Local" storage of the browser. The data should be stored in JSON format
    $(document).on('click', '#saveOrderButton', function() {
        var orders = [];
        $('.table tbody tr').each(function(){
            var orderId = $(this).find('td:first').text();
            var orderValue = $(this).find('td:nth-child(2)').text().replace(/\$/g, '');
            var orderQuantity = $(this).find('td:nth-child(3)').text();

            var order = {
                orderId: orderId,
                orderValue: orderValue,
                orderQuantity: orderQuantity
            };
            orders.push(order);
        });

        localStorage.setItem('orders', JSON.stringify(orders));
    });
});


//Implement the "Filter Orders". On selecting the slider, the table should be updated to show only the orders that are more than the order value
$(document).ready(function() {
    $("#orderValueSlider").on("input", function() {
        var sliderValue = $(this).val();
        $("#sliderValueDisplay").text("$" + sliderValue);
        filterOrders(sliderValue);
    });
});

function filterOrders(sliderValue) {
    var orderValueColumn = $("td:nth-child(2)");
    orderValueColumn.each(function() {
        var orderValue = parseInt($(this).text().replace('$', ''));
        if (orderValue > sliderValue) {
            $(this).closest("tr").show();
        } else {
            $(this).closest("tr").hide();
        }
    });
}


