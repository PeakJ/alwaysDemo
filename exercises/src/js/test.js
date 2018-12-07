window.testJsonp = function(data){
    console.log('调用了');
    console.log(data);
    
}
 
// https://www.jianshu.com/u/6d92660a8cea?name=jiangfeng&age=18&sex=male
function test(url,key){
    var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
    var paramStr = url.substr(url.indexOf('?')+1);
    var r = paramStr.match(reg);
    if(r!=null){
        return  unescape(r[2]);
    }
    return null;

}
console.log(test('https://www.jianshu.com/u/6d92660a8cea?name=peakj&age=18&sex=male','name'));

/******业务代码 *******/
var clipboard = new ClipboardJS('#copyBtn');
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});