function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = document.getElementById('result');
    const notification = document.getElementById('notification');
    notification.textContent = ''; // Clear previous notifications
    
    const operation = document.querySelector('input[name="operation"]:checked');
    if(!operation) {
        notification.textContent = 'Vui lòng chọn một phép toán';
        return;
    }

    // Validation for empty or invalid input
    if (isNaN(num1) || num1 === '') {
        notification.textContent = 'Giá trị nhập ở ô Số thứ nhất không phải là số';
        return;
    }
    if (isNaN(num2) || num2 === '') {
        notification.textContent = 'Giá trị nhập ở ô Số thứ hai không phải là số';
        return;
    }
    if (!operation) {
        notification.textContent = 'Vui lòng chọn một phép toán';
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let calcResult;

    // Perform calculation based on the selected operation
    switch (operation.value) {
        case 'add':
            calcResult = number1 + number2;
            break;
        case 'subtract':
            calcResult = number1 - number2;
            break;
        case 'multiply':
            calcResult = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                notification.textContent = 'Không thể chia cho 0';
                return;
            }
            calcResult = number1 / number2;
            break;
        default:
            notification.textContent = 'Có lỗi xảy ra';
            return;
    }

    // Display the result
    result.value = calcResult;
}

// Event listener for validation on blur
document.getElementById('num1').addEventListener('blur', function () {
    if (isNaN(this.value) || this.value === '') {
        document.getElementById('notification').textContent = 'Giá trị nhập ở ô Số thứ nhất không phải là số';
    }
});

document.getElementById('num2').addEventListener('blur', function () {
    if (isNaN(this.value) || this.value === '') {
        document.getElementById('notification').textContent = 'Giá trị nhập ở ô Số thứ hai không phải là số';
    }
});
