/* 
  自定义pubsub模块
*/
(function (window){

  // 定义PubSub对象
  const PubSub = {}
  // ! 定义一个装callbaks的容器,想好数据结构

  /* 
    callbacksContainers = {
      add:{
        'uid_1': function
        'uid_2': function
      },
      delete:{
        'uid_3':function
      }
    }

  */
  let callbacksContainer = {}
  let i = 0

  // 订阅消息，并返回一个标识token
  // PubSub.subscribe(msg, callBack)
  PubSub.subcreibe = function(msg, callback){
    if (typeof msg !== 'string') return
    // 1.判断对象中是否有该名字的对象
    let callbacks = callbacksContainer[msg]
    let id = 'uid_' + (++i)
    if(!callbacks){
      // 没有msg这个对象，创建，并对其进行添加方法
      callbacks = {}
      callbacksContainer[msg] = callbacks
      callbacks[id] = callback
    }else{
      // 已经有了msg这个对象
      callbacks[id] = callback
    }
    return id
  }

  // 异步发布消息
  // PubSub.publish(msg, data)
  PubSub.publish = function(msg, data){
    // console.log(typeof msg)
    if(typeof msg === 'string'){
      // console.log("msg符合格式")
      if(callbacksContainer[msg] === undefined){ // 不存在属于msg对象
        // console.log('不存在msg对象')
      }else{
        // 遍历callbacksContainer对象中的msg，进行执行
        // console.log('存在遍历执行')
       /* 
        ? Object.values(xxx) => 可以将对象中的属性转变为数组的形式
       */
        Object.values(callbacksContainer[msg]).forEach((callback)=>{
          callback()
        })
      }
    }
  }

  // 同步发布消息
  // PubSub.publishSync(msg, data)
  PubSub.publishSync = (msg, data)=>{
    if(typeof msg === 'string'){
      if(callbacksContainer[msg] === undefined){ // 不存在属于msg对象
      }else{
        // 遍历callbacksContainer对象中的msg，进行执行
        // console.log('存在遍历执行')
        console.log(callbacksContainer)
       /* 
        ? Object.values(xxx) => 可以将对象中的属性转变为数组的形式
       */
        Object.values(callbacksContainer[msg]).forEach((callback)=>{
          setTimeout(() => {
            callback(data)
          })
        })
      }
    }
  }

  // 取消订阅,根据token
  // PubSub.unsubcreibe(token)
  PubSub.unsubcreibe = function (token) {
    // 1.不传参数，取消全部订阅
    // 2.token ==> 取消对应token的操作
    // 3.msg ==> 取消全部msg的监听
    // ? delete 操作符 用于删除对象的某个属性，如果没有这个属性的引用，那它最终会被释放。
    if(!token){
       callbacksContainer = {} // 将对象清空
    }else if(token.split('_')[0] === 'uid'){
      // 遍历callbacksContainer的属性中的参数对应的token
      // 'uid_2'
      let arr = Object.values(callbacksContainer)
      // console.log(arr)
      arr.forEach((item)=>{
        // item {uid_1:fn,uid_2:fn}
        for(const index in item){
          console.log(index)
          if(index === token){
            console.log('delete item.token')
            delete item[token]
          }
        }
      })
      
    }else{
      delete callbacksContainer[token]
    }
  }
  


  //向外暴露PubSub 
  window.PubSub = PubSub

})(window)


