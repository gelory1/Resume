!function () {
    var view = document.querySelector('#head');

    var controller = {
        view: null,
        li:null,
        init: function (view) {
            this.view = view;
            this.li = view.querySelectorAll('nav > ul > li');
            this.bindEvents();
        },
        bindEvents: function () {
            this.activeEvent();
            this.scrollEvent();
        },
        activeEvent: function () {
            for (let i = 0; i < this.li.length; i++) {
                this.li[i].onmouseenter = function (x) {
                    x.currentTarget.classList.add('active');
                }
                this.li[i].onmouseleave = function (x) {
                    x.currentTarget.classList.remove('active');
                }
            }
        },
        scrollEvent: function () {
            let aTags = this.view.querySelectorAll('nav > ul > li > a');
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (x) {
                    x.preventDefault();
                    let a = x.currentTarget;
                    let href = a.getAttribute('href');
                    let element = document.querySelector(href);
                    let top = element.offsetTop;
                    let currentTop = window.scrollY;
                    let targetTop = top - 80;
                    function animate(time) {
                        requestAnimationFrame(animate);
                        TWEEN.update(time);
                    }
                    requestAnimationFrame(animate);
                    var coords = { y: currentTop };
                    var tween = new TWEEN.Tween(coords)
                        .to({ y: targetTop }, 500)
                        .easing(TWEEN.Easing.Cubic.InOut)
                        .onUpdate(function () {
                            window.scrollTo(0, coords.y)
                        })
                        .start();
                }
            }
        }


    }
    controller.init(view);
}.call()



