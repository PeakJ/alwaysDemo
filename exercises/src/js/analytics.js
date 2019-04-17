/**
 * h5 数据采集sdk
 */
; (function (window,undefined) {
    function setData(data) {
        var xhr = new XMLHttpRequest();
        // var url = "https://utrack.yongche.com/bigdata/loghub/put";
        var url = "https://dog.ceo/api/breeds/image/random";
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-type", "application/www-form-urlencoded")
        //xhr.setRequestHeader("Content-type","application/json")
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        }
        xhr.send(JSON.stringify(data));
    }
    function testBeacon(data){
        if(navigator.sendBeacon){
            var result = navigator.sendBeacon('https://dog.ceo/api/breeds/image/random',JSON.stringify(data));
            console.log('beacon result:',result);
        }       
    }
    var testData = {
        "track_id": 1472601450,
        "time": 1554779725,
        "track_type": "track_view",
        "distinct_id": "32bf2e2f4da5165d",
        "properties": {
            "mac": "74:23:44:99:B2:BD",
            "app_id": "com.yongche.android",
            "screen_resolution": "1080*1920",
            "os": "Android",
            "battery_level": "100",
            "app_version": "8.9.0",
            "device_id": "32bf2e2f4da5165d",
            "imei": "861945035269582",
            "sdk_version": "1.0",
            "ip": "61.49.49.132",
            "device_model": "MI 5",
            "os_version": "7.0",
            "is_crack": false,
            "operator": "",
            "net_status": "WIFI"
        },
        "event": "view_com.yongche.android.YDBiz.Order.HomePage.MainActivity",
        "log_from": "user",
        "event_detail": {
            "from_page": "com.yongche.android.YDBiz.Welcome.LoadingActivity",
            "current_page": "com.yongche.android.YDBiz.Order.HomePage.MainActivity",
            "current_title": "个人中心",
            "from_title": "易到用车",
            "start_time": 1554779609,
            "end_time": 1554779725,
            "user_id": "6109089"
        }
    };
    setData(testData);
    testBeacon(testData);
})(window)
