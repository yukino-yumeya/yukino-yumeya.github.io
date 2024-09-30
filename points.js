document.querySelectorAll('.lottery-item img').forEach(function(img) {
    img.addEventListener('click', function() {
        // 播放音效
        document.getElementById('clickSound').play();

        // 獲取自訂的獎項信息
        const selectedPrize = this.getAttribute('data-prize');

        // 隱藏圖片
        this.classList.add('hidden');

        // 顯示加載畫面
        document.getElementById('loadingScreen').style.display = 'flex';

        // 延遲2秒後顯示中獎訊息並隱藏加載畫面
        setTimeout(function() {
            document.getElementById('loadingScreen').style.display = 'none';
            const customMessage = '恭喜你抽中了!\n' + selectedPrize;
            showAlert(customMessage);
        }, 2000);  // 模擬2秒的加載時間
    });
});

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('prize-alert');  // 添加 class 來應用樣式
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.backgroundColor = 'white';
    alertBox.style.padding = '50px'; //padding框大小
    alertBox.style.border = '6px solid black'; //邊框寬度
    alertBox.style.borderRadius = '20px'; //邊框圓角
    alertBox.style.zIndex = '1000';
    alertBox.style.fontSize = '60px'; //文字大小
    alertBox.style.textAlign = 'center'; //文字居中
    alertBox.innerText = message;

    const closeButton = document.createElement('button');
    closeButton.innerText = '關閉';
    closeButton.style.marginTop = '40px';//增加按衂上方空間
    closeButton.style.fontSize = '30px';//按鈕文字大小
    closeButton.addEventListener('click', function() {
        document.body.removeChild(alertBox);
    });

    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);
}
