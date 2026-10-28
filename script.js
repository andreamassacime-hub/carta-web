document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const errorMsg = document.getElementById('errorMsg');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');

    let noClickCount = 0;

    const errorMessages = [
        "¡lo sabía, te odioo",
        "cómo te atreves ALBERTO",
        "OTRA VEZZZ??????",
        "IMPOSIBLE, TE ODIO NO ME HABLES NUNCA MÁS"
    ];

    if (btnNo) {
        btnNo.addEventListener('click', () => {
            errorMsg.textContent = errorMessages[noClickCount % errorMessages.length];
            noClickCount++;
            btnNo.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px)`;
        });
    }

    if (btnYes) {
        btnYes.addEventListener('click', () => {
            screen1.classList.add('hidden');
            screen2.classList.remove('hidden');
        });
    }
});