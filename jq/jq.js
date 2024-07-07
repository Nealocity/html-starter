$(document).ready(function() {
    $('.btn.btn-primary.me-2').click(function() {
        var newRow = '<tr>';
        newRow += '<td><input type="text" class="orderIdInput" /></td>';
        newRow += '<td><input type="text" class="orderValueInput" /></td>';
        newRow += '<td><input type="text" class="orderQuantityInput" /></td>';
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
