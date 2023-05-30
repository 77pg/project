<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    try {
        // 執行驗證邏輯，例如檢查郵箱格式或其他驗證步驟

        // 處理註冊邏輯，例如將用戶信息存儲到數據庫

        // 返回處理結果
        if (!empty($email)) {
            $response = array("status" => "success", "message" => "註冊成功！");
        } else {
            $response = array("status" => "error", "message" => "註冊失敗！");
        }
    } catch (Exception $e) {
        $response = array("status" => "error", "message" => "發生錯誤，無法完成註冊。請稍後再試。");
    }

    // 將回應以JSON格式返回
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
