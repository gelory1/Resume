!function () {
    let canvasImg = document.querySelector('#canvasImg');
    let bookmarksImg = document.querySelector('#bookmarksImg');
    let bannerImg = document.querySelector('#bannerImg');
    pro1.onclick = function () {
        barPro.className = "bar-inner1"
        canvasImg.classList.remove('hid');
        bookmarksImg.classList.remove('hid');
        bannerImg.classList.remove('hid');
        document.querySelector('#bannerImg img').classList.remove('active');
        document.querySelector('#canvasImg img').classList.remove('active');
    }
    pro2.onclick = function () {
        barPro.className = "bar-inner2"
        canvasImg.classList.add('hid');
        bookmarksImg.classList.add('hid');
        bannerImg.classList.remove('hid');
        document.querySelector('#canvasImg img').classList.remove('active');
        document.querySelector('#bannerImg img').classList.add('active');
    }
    pro3.onclick = function () {
        barPro.className = "bar-inner3"
        canvasImg.classList.remove('hid');
        bookmarksImg.classList.remove('hid');
        bannerImg.classList.add('hid');
        document.querySelector('#bannerImg img').classList.remove('active');
        document.querySelector('#canvasImg img').classList.add('active');
    }
    document.querySelector('#bannerImg img').onclick = function () {
        window.open("https://gelory1.github.io/myBanner/index2.html", "_blank")
    }
    document.querySelector('#bookmarksImg img').onclick = function () {
        window.open("https://gelory1.github.io/myBookmarks/index.html", "_blank")
    }
    document.querySelector('#canvasImg img').onclick = function () {
        window.open("https://gelory1.github.io/myCanvas/index.html", "_blank")
    }
}.call();
