//Implement the Add Order. When the button is clicked, add a new row in the top of the table, 
//with each column showing a text box where data can be entered. 
//Show a button called "Add" under "Action" column. Once all data is entered and "Add" button pressed, 
//the data should be displayed as labelled data in the row.

$(document).ready(function() {
    $('.btn.btn-primary.me-2').click(function() {
        var newRow = '<tr>';
        newRow += '<td><input type="text" class="orderIdInput" style="color:grey" value="OrderId" onfocus="if(this.value==\'OrderId\'){this.value=\'\'}" onblur="if(this.value==\'\'){this.value=\'OrderId\'}" /></td>';
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
        newRow += '<td><label>' + orderValue + '</label></td>';
        newRow += '<td><label>' + orderQuantity + '</label></td>';
        newRow += '<td><button class="editOrderButton btn btn-sm btn-primary">Edit</button><button class="deleteOrderButton btn btn-sm btn-danger">Delete</button></td>';
        newRow += '</tr>';

        $(this).closest('tr').replaceWith(newRow);
    });
});
