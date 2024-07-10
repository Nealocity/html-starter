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
        newRow += '<td class="action-col"><button class="action-col addOrderButton btn btn-sm btn-primary">Add</button><button class="action-col deleteOrderButton btn btn-sm btn-danger">Delete</button></td>';
        newRow += '</tr>';

        $('.table tbody').prepend(newRow);
    });
    
    $(document).on('click', '.addOrderButton', function() {
        var orderId = $(this).closest('tr').find('.orderIdInput').val();
        var orderValue = $(this).closest('tr').find('.orderValueInput').val();
        var orderQuantity = $(this).closest('tr').find('.orderQuantityInput').val();

        var newRow = '<tr>';
        newRow += '<td><label>' + orderId + '</label></td>';
        newRow += '<td><label>' + orderValue + '</label></td>';
        newRow += '<td><label>' + orderQuantity + '</label></td>';
        newRow += '<td><button class="editOrderButton btn btn-sm btn-primary">Edit</button><button class="deleteOrderButton btn btn-sm btn-danger">Delete</button></td>';
        newRow += '</tr>';

        $(this).closest('tr').replaceWith(newRow);
    });

});
