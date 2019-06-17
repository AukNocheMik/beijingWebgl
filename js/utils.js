/**
 * 图片加载处理
 */
function _loadImages(pics, callback, len) {
    len = len || pics.length;
    if (pics.length) {
        var IMG = new Image(),
            picelem = pics.shift();

        if (window._pandaImageLoadArray) {
            window._pandaImageLoadArray = window._pandaImageLoadArray
        } else {
            window._pandaImageLoadArray = [];
        }
        window._pandaImageLoadArray.push(picelem);
        IMG.src = picelem;
        // 从数组中取出对象的一刻，就开始变化滚动条
        _drawLoadProgress(window._pandaImageLoadArray.length / (len * len));
        // 缓存处理
        if (IMG.complete) {
            window._pandaImageLoadArray.shift();
            return _loadImages(pics, callback, len);
        } else {
            // 加载处理
            IMG.onload = function () {
                window._pandaImageLoadArray.shift();
                IMG.onload = null; // 解决内存泄漏和GIF图多次触发onload的问题
            }
            // 容错处理 todo 应该如何处理呢?
            // 目前是忽略这个错误，不影响正常使用
            IMG.onerror = function () {
                window._pandaImageLoadArray.shift();
                IMG.onerror = null;
            }
            return _loadImages(pics, callback, len);
        }
        return;
    }
    if (callback) _loadProgress(callback, window._pandaImageLoadArray.length, len);
}

/**
 * 监听实际的加载情况
 */
function _loadProgress(callback, begin, all) {
    var loadinterval = setInterval(function () {
        if (window._pandaImageLoadArray.length != 0 && window._pandaImageLoadArray.length != begin) {
            _drawLoadProgress((begin - window._pandaImageLoadArray.length) / all);
        } else if (window._pandaImageLoadArray.length == 0) {
            _drawLoadProgress(1)
            setTimeout(function () {
                callback.call(window);
            }, 500);
            clearInterval(loadinterval);
        }
    }, 300);
}
function _drawLoadProgress(w) {
    var num = Math.floor(w * 100) >= 100 ? 100 : Math.floor(w * 100) + 1;
    console.log(num)
    $('.loading-text').text('迎福倒计时...' + num + '%'); //加载页百分比文字
    $('.loading-line-in').css({
    	'width': (num) + '%'
    }); //加载页进度条百分比
}