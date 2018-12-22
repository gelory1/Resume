!function () {
    let canvasImg = document.querySelector('#canvasImg');
    let bookmarksImg = document.querySelector('#bookmarksImg');
    let bannerImg = document.querySelector('#bannerImg');
    pro1.onclick = function () {
        barPro.className = "bar-inner1"
        canvasImg.classList.remove('hid');
        bookmarksImg.classList.remove('hid');
        musicImg.classList.remove('hid');
        vueClientImg.classList.remove('hid');
        weiAppImg.classList.remove('hid');
        document.querySelector('#musicImg img').classList.remove('active');
        document.querySelector('#canvasImg img').classList.remove('active');
    }
    pro2.onclick = function () {
        barPro.className = "bar-inner2"
        canvasImg.classList.remove('hid');
        bookmarksImg.classList.add('hid');
        musicImg.classList.remove('hid');
        vueClientImg.classList.remove('hid');
        weiAppImg.classList.add('hid');
        document.querySelector('#canvasImg img').classList.add('active');
        document.querySelector('#musicImg img').classList.add('active');
    }
    pro3.onclick = function () {
        barPro.className = "bar-inner3"
        canvasImg.classList.add('hid');
        bookmarksImg.classList.remove('hid');
        musicImg.classList.add('hid');
        vueClientImg.classList.add('hid');
        weiAppImg.classList.remove('hid');
        document.querySelector('#musicImg img').classList.remove('active');
        document.querySelector('#canvasImg img').classList.remove('active');
    }
    document.querySelector('#musicImg img').onclick = function () {
        window.open("https://gelory1.github.io/music-demo/src/", "_blank")
    }
    document.querySelector('#bookmarksImg img').onclick = function () {
        window.open("https://gelory1.github.io/myBookmarks/index.html", "_blank")
    }
    document.querySelector('#canvasImg img').onclick = function () {
        alert('app已上线，各大应用商店均可下载')
    }
    document.querySelector('#vueClientImg img').onclick = function () {
        window.open("https://gelory1.github.io/blog-client-view/", "_blank")
    }
    document.querySelector('#weiAppImg img').onclick = function () {
        window.open("http://pdheymdhu.bkt.clouddn.com/%E4%BA%8C%E7%BB%B4%E7%A0%81.png", "_blank")
    }
}.call();
