/**
 * h5 数据采集sdk
 */
var yda =  (function (window, undefined) {
    var SDK_VERSION = "1.0.0",  //SDK版本号
        USER_KEY = "_app_token_v3"; // user key

    var configData = {
        "track_id": "",
        "time": getCurrentTime(),
        "track_type": "track_view",  // track_view or  track
        "distinct_id": getUserId() || generateUUID(), // 用户ID/访客ID
        "properties": {
            "mac": "",
            "app_id": getBundleId(),
            "screen_resolution": getScreenResolution(),
            "os": getOS(),
            "battery_level": "",
            "app_version": "",
            "device_id": "",
            "imei": "",
            "sdk_version": SDK_VERSION,
            "ip": "",
            "device_model": "", // MI 5
            "os_version": "", //7.0
            "is_crack": false, // 是否越狱/root
            "operator": "", // 运营商
            "net_status": "" // WIFI
        },
        "event": "view_com.yongche.android.YDBiz.Order.HomePage.MainActivity",
        "log_from": "user",
        "event_detail": {
            "from_page": getReferrerURL(),
            "current_page": getCurrentURL(),
            "current_title": getCurrentTitle(),
            "from_title": "",
            "start_time": "",
            "end_time": "",
            "user_id": getUserId()
        }
        //  track_type为track_view时 event_detail的数据格式
        //  {
        //     "from_page": getReferrerURL(),
        //     "current_page": getCurrentURL(),
        //     "current_title": getCurrentTitle(),
        //     "from_title": "",
        //     "start_time": "",
        //     "end_time": "",
        //     "user_id": getUserId()
        // }


        // 自定义上传的event_detail，例如需要上传广告的链接等,track_type为track
        // {
    	// 	"current_page":"HomeActivity",
    	// 	"module":"home",
    	// 	"ad_url":"https:\/\/jumpluna.58.com\/i\/2d6nxfdrh97pnc4f21",
    	// 	"action":"click",
    	// 	"button_name":"Ad",
    	// 	"user_id":"6109089"
        // }
        


        // 点击事件上传的event_detail格式
        // {
    	// 	"button_name":"Route",
    	// 	"current_page":"My",
    	// 	"module":"my",
    	// 	"action":"click",
    	// 	"user_id":"6109089"
    	// }


    };
    function getCurrentTime() {
        return Date.parse(new Date()) / 1000;
    }
    function getUserId() {
        return getCookie(USER_KEY);
    }
    function getOS() {
        var sUserAgent = navigator.userAgent;
        var isSymbian = (navigator.platform == "SymbianOS");
        if (isSymbian) return "Symbian";
        var isiPhone = (navigator.platform == "iPhone");
        if (isiPhone) return "iPhone";
        var isiPad = (navigator.platform == "iPad");
        if (isiPad) return "iPad";
        var isAndroid = (navigator.platform == "Linux") && sUserAgent.indexOf("Android") > -1;
        if (isAndroid) return "Android";

        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac) return "Mac";
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix) return "Unix";
        var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        if (isLinux) return "Linux";
        if (isWin) {
            var isWin95 = sUserAgent.indexOf("Win95") > -1 || sUserAgent.indexOf("Windows 95") > -1;
            if (isWin95) return "Win95";
            var isWin98 = sUserAgent.indexOf("Win98") > -1 || sUserAgent.indexOf("Windows 98") > -1;
            if (isWin98) return "Win98";
            var isWinME = sUserAgent.indexOf("Win 9x 4.90") > -1 || sUserAgent.indexOf("Windows ME") > -1;
            if (isWinME) return "WinMe";
            var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K) return "Win2000";
            var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP) return "WinXP";
            var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003) return "Win2003";
            var isWin2003 = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWin2003) return "WinVista";
            var isWin2003 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin2003) return "Win7";

            //mobile
            var isWinCE = sUserAgent.indexOf("WindowsCE") > -1;
            if (isWinCE) return "WindowsCE";
            var isWindowsMobile = sUserAgent.indexOf("WindowsMobile") > -1;
            if (isWindowsMobile) return "WindowsMobile";
        }
        return "unknown";
    }
    function getBundleId() {
        if (getOS() == "Android") {
            return "com.yongche.android";
        } else if (getOS() == "iPhone") {
            return "com.yongche.iYongche"
        } else {
            return ""
        }
    }
    function getReferrerURL() {
        var ref = '';
        if (document.referrer.length > 0) {
            ref = document.referrer;
        }
        try {
            if (ref.length == 0 && opener.location.href.length > 0)
                ref = opener.location.href;
        } catch (e) { }
        return ref;
    }
    function getCurrentURL() {
        return document.URL;
    }
    function getCurrentTitle() {
        return document.title;
    }
    /**
     * 获取用户IP地址，存在兼容性问题
     */
    function getIP(onNewIP) {
        //compatibility for firefox and chrome
        var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        var pc = new myPeerConnection({
            iceServers: []
        }),
            noop = function () { },
            localIPs = {},
            ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

        function iterateIP(ip) {
            if (!localIPs[ip]) onNewIP(ip);
            localIPs[ip] = true;
        }

        //create a bogus data channel
        pc.createDataChannel("");

        // create offer and set local description
        pc.createOffer().then(function (sdp) {
            sdp.sdp.split('\n').forEach(function (line) {
                if (line.indexOf('candidate') < 0) return;
                line.match(ipRegex).forEach(iterateIP);
            });

            pc.setLocalDescription(sdp, noop, noop);
        }).catch(function (reason) {
            // An error occurred, so handle the failure to connect
        });

        //sten for candidate events
        pc.onicecandidate = function (ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
            ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
        };
    }
    /**
     * 获取设备电量，异步获取，且存在兼容性问题
     */
    function getBattery() {
        if (navigator.getBattery) {
            navigator.getBattery().then(function (res) {
                configData.properties.battery_level = res.level * 100
            })
        }
    }
    getBattery();
    /**
     * js 模拟生成UUID
     */
    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    }
    function getScreenResolution() {
        return window.screen.width + '*' + window.screen.height;
    }
    function getCookie(cookieName) {
        var cookieValue = document.cookie;
        if (!cookieValue) return null;
        var items = cookieValue.split(';');
        for (var i = 0, l = items.length; i < l; i++) {
            var item = items[i],
                itemArr = item.split('='),
                key = itemArr[0].replace(/(^\s+)/g, '');
            if (key === cookieName) return itemArr[1];
        }
        return null;
    }
    /**
     * 设置页面进入时间
     */
    function setStartTime() {
        configData.event_detail.start_time = getCurrentTime();
    }
    /**
     * 设置页面进入跳出时间
     */
    function setEndTime() {
        configData.event_detail.end_time = getCurrentTime();
    }
    function sendData(data) {
        var request;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else {
            request = new ActiveXObject('Microsoft.XMLHTTP');
        }
        // var url = "https://utrack.yongchedata/loghub/put";
        var url = "http://10.0.11.45:8099/bigdata/loghub/put";
        request.open("POST", url);
        request.setRequestHeader("Content-type", "application/www-form-urlencoded")
        //request.setRequestHeader("Content-type","application/json")
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    var result = JSON.parse(request.responseText);
                    console.log('result:', result)
                } else {
                    console.log('errorMessage:',JSON.parse(request.responseText).message);
                }
            } else {
                // request pending。。。
            }
        }
        request.send(JSON.stringify(data));
    };
    function track(obj){
        configData.event_detail = obj;
        sendData(configData);
    }
    window.onload = function () {
        setStartTime();
        getIP(function (ip) {
            configData.properties.ip = ip;
        })
    }
    window.onbeforeunload = function (e) {
        setEndTime();
        sendData(configData);
        // var now = +new Date;
        // while (new Date - now >= 10) { } // 阻塞 10ms
    }
    return {
        track:track
    }
})(window)
