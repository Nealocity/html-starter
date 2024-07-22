$(document).ready(function() {
    $('.btn.btn-primary.me-2').click(function() {
        var newRow = '<tr>';
        var nextOrderId = $('table tbody tr').length + 1;
        newRow += '<td><input type="text" class="orderIdInput" style="color:grey" value="OrderId" onfocus="if(this.value==\'OrderId\'){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=\'OrderId\'}" /></td>';
        newRow += '<td><input type="text" class="orderValueInput" style="color:grey" value="Value" onfocus="if(this.value==\'Value\'){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=\'Value\'}" /></td>';
        newRow += '<td><input type="text" class="orderQuantityInput" style="color:grey" value="Quantity" onfocus="if(this.value==\'Quantity\'){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=\'Quantity\'}" /></td>';
        newRow += '<td class="action-col"><button class="action-col addOrderButton btn btn-sm btn-primary">Add</button><button class="action-col deleteOrderButton btn btn-sm btn-danger">Delete</button></td>';
        newRow += '</tr>';

        $('table tbody').prepend(newRow);
    });
});
