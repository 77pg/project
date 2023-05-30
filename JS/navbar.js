document.addEventListener("DOMContentLoaded", function () {
    // 獲取必要的元素
    var integrationDropdown = document.querySelector(".dropdown-item[href='#integrationField']");
    var integrationInput = document.getElementById("integrationField");
    var saveButton = document.getElementById("saveButton");
    var confirmationDiv = document.getElementById("confirmationDiv");

    // 處理載具整合的點擊事件
    integrationDropdown.addEventListener("click", function (event) {
        event.preventDefault(); // 阻止預設的錨點跳轉行為
        event.stopPropagation();

        // 切換展開/收起狀態
        if (integrationInput.style.display === "none") {
            integrationInput.style.display = "block";
            saveButton.style.display = "block";
        } else {
            integrationInput.style.display = "none";
            saveButton.style.display = "none";
        }
    });

    // 處理儲存按鈕的點擊事件
    saveButton.addEventListener("click", function (event) {
        event.stopPropagation();
        var inputText = integrationInput.value.trim();
        if (inputText === "") {
            // 不顯示確認div
            confirmationDiv.style.display = "none";
            alert("請填寫載具");
            return;
        }
        if (!validateInputFormat(inputText)) {
            // 不顯示確認div
            confirmationDiv.style.display = "none";
            alert("載具格式無效");
            return;
        }

        // 顯示確認div
        confirmationDiv.style.display = "block";
    });

    // 載具格式驗證函數
    function validateInputFormat(input) {
        var regex = /^\/[A-Za-z0-9!@#$%^&*()-_]{7}$/;
        return regex.test(input);
    }
});

