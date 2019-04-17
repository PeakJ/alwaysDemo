window.testJsonp = function (data) {
    console.log('调用了');
    console.log(data);

}
/******业务代码 *******/
var clipboard = new ClipboardJS('#copyBtn');
clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});