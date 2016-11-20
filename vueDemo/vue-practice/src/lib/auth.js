import WildDog from 'wilddog'

// 野狗配置
const config = {
  syncURL: 'https://surfers.wilddogio.com',
  authDomain: 'surfers.wilddog.com'
}

// 野狗实例
WildDog.initializeApp( config )
let ref = wilddog.sync().ref()

export default {

  userKey: 'user-login-info',

  user: null,

  authenticated: false,

  // 登录
  login( context, creds, cb ) {
    let that = this;
    WildDog.auth().signInWithEmailAndPassword( creds.email, creds.password )
        .then(function () {
            that.user = wilddog.auth().currentUser
            that.authenticated = true
            context.$localStore.setItem( that.userKey, JSON.stringify( wilddog.auth().currentUser ) )
            // 登录成功后回调
            if ( cb && typeof cb === 'function' ) {
              cb.call(that, that.user)
            }
        }).catch(function (err) {
            alert( err )
        })
  },

  // 注册
  create( context, creds ) {
    WildDog.auth().createUserWithEmailAndPassword( creds.email, creds.password )
    	.then(function ( user ) {
        console.log( this, user )
    	}).catch(function ( err ) {
        alert( err )
    })
  },

  // 退出
  signOut( context ) {
    WildDog.auth().signOut().then(function() {
        // 退出成功
        console.log("sign-out")
    }).catch(function(error) {
        // 发生错误
        console.log("sign-out-error")
    });
  },

  // 检查是否登录
  checkAuth() {

  }
}
