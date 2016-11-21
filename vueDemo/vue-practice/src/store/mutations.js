// 更改vuex中state的唯一方式是提交mutation
// vuex中的mutations非常类似于事件
// 每个mutation都有一个字符串类型的 `事件类型（type）`和一个 `回调函数（handle）`
// 这个回调函数就是我们实际进行状态更改的地方，并且它接受state作为第一个参数
// 调用方法为：store.commit('handle')

export default {
  increment( state ) {
    state.count++
  },
  increment( state ) {
    state.count--
  }
}
