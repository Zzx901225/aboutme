



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