export default {

  canUse() {
    return true
  },

  setItem( key, value ) {
    this.canUse() && localStorage.setItem( key, JSON.stringify( value ) )
  },

  getItem( key ) {
    return JSON.parse( localStorage.getItem( key ) )
  }
}
