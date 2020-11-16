export const utils = {
    setContentHeight: function () {
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//浏览器高度
        $('.apps').css({ 'height': windowHeight });
    }
}