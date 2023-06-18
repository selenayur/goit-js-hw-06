const rangeSizeElem = document.querySelector('#font-size-control');
const textSpanElem = document.querySelector('#text');

const onRangeSize = event => 
    textSpanElem.style.fontSize = `${event.currentTarget.value}px`;

rangeSizeElem.addEventListener('input', onRangeSize);