var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = 'powderblue';
    //   i = i + 1;
    // }
    $('a').css('color',color);//이 웹페이지의 모든 a 태그를 jquery로 제어하겠다는 뜻
  }
}
var Body = {
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css("backgroundColor", color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value ==='다크모드 ON'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '일반모드 ON';

    Links.setColor('yellow')
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value ='다크모드 ON';

    Links.setColor('blue');
  }
}
