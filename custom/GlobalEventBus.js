/* 
  自定义全局事件总线
*/
(function (window) {
  
  /* 
    callBacksContainers:{
      add:[fn,fn2],
      delete:[
        fn
      ]
    }
  */
  const GlobalEventBus = {}
  // 创建一个存储回调函数的容器
  let callBacksContainers = {}

  // 1. on 监听
  GlobalEventBus.on = function (msg, callback) {
    let callbacks = callBacksContainers[msg]
    if(!callbacks){
      callbacks = []
      callBacksContainers[msg] = callbacks
      callbacks[callbacks.length] = callback    
    }else{
      callBacksContainers[msg] = callbacks
      callbacks.push = callback

    }
  }

  // 2.emit 发布
  GlobalEventBus.emit = function (msg, data) {
    if(typeof msg === 'string'){
      if(!callBacksContainers[msg]){

      }else{
        Object.values(callBacksContainers[msg]).forEach((callback)=>{
          callback(data)
        })
      }
    }


    
  }

  // 3.off 取消发布
  GlobalEventBus.off = function (msg) {
    /* 
      1.不输入 取消全部订阅
      2.输入清空对象msg对象存储的回调
    */
    if(!msg){
      callBacksContainers = {}
    }else if(typeof msg === 'string' && callBacksContainers[msg]){
      delete callBacksContainers[msg]
    }

  }

  // 暴露对象
  window.GlobalEventBus = GlobalEventBus
})(window)