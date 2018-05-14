



// js document
window.onload = function(){

}

// 命名空间
var xiang = {};

// 工具类
xiang.tools = {};

xiang.tools.$ = function(obj){
  return document.getElementById(obj);
}
xiang.tools.getByClass = function(oParent, className){
  var aEle = document.getElementsByClassName("*");
  var arr = [];
  for(var i= 0;i< aEle.length;i ++){
    var aClassName = aEle[i].className.split(" ");
    for(var j= 0;j< aClassName.length;j ++){
      if(aClassName[j] == className){
        arr.push(aEle[i]);
        break;
      }
    }
  }
}
xiang.tools.getviwWidth = function(){
  return window.innerWidth || document.documentElement.clientWidth
}
xiang.tools.getviwHeight = function(){
  return window.innerHeight || document.documentElement.clientHeight
}
xiang.tools.setStyle = function(obj, attr, value){
  obj.style[attr] = value;
  obj.style['webkit'+ attr.substring(0, 1).toUpperCase() + attr.substring(1)] = value;
}



// loading 图片预加载
xiang.app.showloading = function(){
  var oMain = xiang.tools.$("main");
  var oLoading = xiang.tools.$("loading");
  var oMyaudio = xiang.tools.$("Myaudio");
  var aDiv = oLoading.getElementsByTagName("div");
  var oSpan = oLoading.getElementsByTagName("span")[0];

  var arr = [
    "about2.jpg",
		"about3.jpg",
		"about4.jpg",
		"bg1.jpg",
		"bg2.jpg",
		"bg3.jpg",
		"bg4.jpg",
		"bg5.jpg",
		"greenLine.png",
		"team.png",
		"worksimg1.jpg",
		"worksimg2.jpg",
		"worksimg3.jpg",
		"worksimg4.jpg",
  ];
  var iNow = 0;
  for(var i=0;i<arr.length;i++){
    var objImg = new Image();
    objImg.src = "img/" + arr[i];
    objImg.onload = function(){
      iNow++;
      oSpan.style.width = iNow/arr.length*100+"%";
    }
  }
  // 检测span进度是不是运动结束
  oSpan.addEventListener("transitionend", spanChang, false);
  oSpan.addEventListener("webKItTransitionEnd", spanChang, false);
  function spanChang(){
    if(oSpan.style.width == "100%"){
      oSpan.style.dispaly = "none";
      aDiv[0].style.display = 0;
      aDiv[1].style.display = 0;
    }
  }

  // 检测div是否运动结束
  aDiv[0].addEventListener("transitionend", divChang, false);
  oSpan.addEventListener("webkitTransitionEnd", divChang, false);
  function divChang(){
    oMain.removeChild(oLoading);
    oMyaudio.play();
    he.ui.cjAnamite()[0].inAn();
  }
}