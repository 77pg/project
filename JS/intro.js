// 寵物種類的span

// 取得所有介紹的 span 元素
const intros = document.querySelectorAll('.intro');

// 迭代每個介紹的 span 元素
intros.forEach((intro) => {
    // 為每個介紹的 span 元素新增點擊事件監聽器
    intro.parentElement.addEventListener('click', () => {
        intro.classList.toggle('hidden'); // 切換介紹的顯示/隱藏狀態
    });
});

//more英文內容
function toggleEnglishContent() {
    var englishContent = document.getElementById("englishContent");
    var englishtext = document.getElementsByClassName("englishtext")[0];

    if (englishContent.style.display === "none") {
        englishContent.style.display = "block";
        englishtext.innerHTML = "less";
    } else {
        englishContent.style.display = "none";
        englishtext.innerHTML = "more";
    }
}
