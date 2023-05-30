$(document).ready(function () {
    var petList = [
        {
            name: "小花",
            species: "貓",
            age: 2,
            description: "可愛的小貓咪"
        },
        {
            name: "旺財",
            species: "狗",
            age: 3,
            description: "忠心的小狗"
        },
        {
            name: "兔兔",
            species: "兔子",
            age: 1,
            description: "活潑的小兔寶"
        }
    ];

    renderPetList();

    // 編輯按鈕點擊事件處理
    $(document).on("click", ".editButton", function () {
        var listItem = $(this).closest("li");
        var pet = listItem.data("pet");

        // 填充表單資料
        $("#name").val(pet.name);
        $("#age").val(pet.age);
        $("#description").val(pet.description);

        if (pet.species === "其他種類") {
            $("#species").val("其他種類");
            $("#otherSpeciesInput").show().val(pet.otherSpeciesInput);
        } else {
            $("#species").val(pet.species);
            $("#otherSpeciesInput").hide();
        }

        // 顯示確認修改和取消修改按鈕
        $("#submitButton").hide();
        $("#confirmButton").show();
        $("#cancelButton").show();

        // 設置確認修改按鈕的點擊事件處理
        $("#confirmButton").unbind("click").click(function () {
            // 更新寵物資料
            pet.name = $("#name").val();
            pet.species = $("#species").val();
            pet.otherSpeciesInput = $("#otherSpeciesInput").val();
            pet.age = $("#age").val();
            pet.description = $("#description").val();

            // 清空表單資料
            $("#name").val("名稱");
            $("#species").val("貓");
            $("#otherSpeciesInput").hide().val("");
            $("#age").val("1");
            $("#description").val("");

            // 隱藏確認修改和取消修改按鈕
            $("#submitButton").show();
            $("#confirmButton").hide();
            $("#cancelButton").hide();

            renderPetList();
        });

        // 設置取消修改按鈕的點擊事件處理
        $("#cancelButton").unbind("click").click(function () {
            // 清空表單資料
            $("#name").val("名稱");
            $("#species").val("貓");
            $("#otherSpeciesInput").hide().val("");
            $("#age").val("1");
            $("#description").val("");

            // 隱藏確認修改和取消修改按鈕
            $("#submitButton").show();
            $("#confirmButton").hide();
            $("#cancelButton").hide();
        });
    });

    // 刪除按鈕點擊事件處理
    $(document).on("click", ".deleteButton", function () {
        var listItem = $(this).closest("li");
        var index = listItem.index();

        // 從清單中移除寵物
        petList.splice(index, 1);

        renderPetList();
    });

    // 渲染寵物清單
    function renderPetList() {
        // 清空寵物清單
        $("#petList").empty();

        // 逐一將寵物添加到清單中
        for (var i = 0; i < petList.length; i++) {
            var pet = petList[i];

            var listItem = $("<li></li>");
            listItem.data("pet", pet);


            var petInfo = $("<span></span>").text(pet.name + "，是隻" + pet.age + "歲的" + pet.species);
            if (pet.species === "其他種類") {
                // var newpetInfo = $("<span></span>").text(" - " + pet.otherSpeciesInput);
                // petInfo.append(newpetInfo);
                var petInfo = $("<span></span>").text(pet.name + "，是隻" + pet.age + "歲的" + pet.otherSpeciesInput);
            }
            var description = $("<span></span>").text("特徵: " + pet.description);


            var buttons = $("<div></div>");
            var editButton = $("<button></button>").text("編輯").addClass("editButton");
            var deleteButton = $("<button></button>").text("刪除").addClass("deleteButton");

            buttons.append(editButton, deleteButton);

            listItem.append(petInfo, description, buttons);

            $("#petList").append(listItem);
        }
    }

    // 新增寵物按鈕點擊事件處理
    $("#submitButton").click(function () {
        var name = $("#name").val();
        var species = $("#species").val();
        var age = $("#age").val();
        var description = $("#description").val();
        var otherSpeciesInput = $("#otherSpeciesInput").val();

        // 檢查必填項目是否填寫
        if (name === "" || age === "" || species === "其他種類" || otherSpeciesInput === "" || description === "") {
            if (name === "") {
                alert("請填寫寵物名字");
                return;
            }
            if (age === "") {
                alert("請正確填寫年齡，最大值為25");
                return;
            }
            if (species === "其他種類" & otherSpeciesInput === "") {
                alert("請填寫其他種類");
                return;
            }
            if (description === "") {
                alert("請描述您的寵物特徵");
                return;
            }
        }
        else {
            alert("成功新增您的寵物資料");
        }

        // 建立寵物物件
        var pet = {
            name: name,
            species: species,
            otherSpeciesInput: otherSpeciesInput,
            age: age,
            description: description
        };

        // 如果種類為其他，添加自訂種類屬性
        if (species === "其他種類") {
            pet.otherSpeciesInput = otherSpeciesInput;
        }
        // 將寵物添加到清單中                        
        petList.push(pet);



        // 清空表單資料
        $("#name").val("名稱");
        $("#species").val("貓");
        $("#otherSpecies").hide().val("");
        $("#age").val("1");
        $("#description").val("");

        renderPetList();
    });

    // 種類下拉選單改變事件處理
    $("#species").change(function () {
        if ($(this).val() === "其他種類") {
            $("#otherSpecies").show();
        } else {
            $("#otherSpecies").hide();
        }
    });
    
});

