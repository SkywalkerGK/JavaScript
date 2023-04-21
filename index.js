let content2 = document.getElementById('content-2')
let textHtml = '<b>เกิดมาไม่เคยเจอใครเหมือนเธอ</b>'
textHtml += ' <i>หลับฝันละเมอภาพเธอคอยหลอนทุกคืน</i> '
content2.innerHTML = textHtml;


let discountButton = document.getElementById('discount-button')
let message = document.getElementById('message')

function showMessage() {
    message.innerHTML = 'หมดเวลาสนุกแล้วสิ'
}

discountButton.addEventListener('click', showMessage)