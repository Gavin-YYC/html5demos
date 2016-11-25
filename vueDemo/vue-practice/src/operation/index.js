// 查找模板
import Router from './template/router'

class Main {
  checkId() {

  }

  getToken() {

  }

  checkToken() {

  }

  getStaticData() {

  }

  renderTpl() {
    // tempId
    Router.getTpl( tempId ).then( ( View ) => {
      new View();
    })
  }
}
