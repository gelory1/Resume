var APP_ID = 'xekLlucVRjXiyCFJqJR6uDm5-gzGzoHsz';
var APP_KEY = 'XSDrYop2HDGDnXhCEI6izipQ';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');
  query.find().then(function (messages) {
    let array = messages.map((item) => item.attributes)
    array.forEach(element => {
        let li = document.createElement('li');
        let ulList = document.querySelector('section.postMessage ul')
        li.innerText = `${element.name}: ${element.content}`
        ulList.appendChild(li)
    });
    
  });

var Message = AV.Object.extend('Message');
var message = new Message();
var myForm = document.querySelector('section.postMessage form.messageForm');
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var content = myForm.querySelector('input[name=content]').value
    var name = myForm.querySelector('input[name=name]').value
    message.save({
        content: content,
        name: name
    }).then(function (object) {
        let li = document.createElement('li');
        let ulList = document.querySelector('section.postMessage ul')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        ulList.appendChild(li);
        myForm.querySelector('input[name=content]').value = '';
    })
})