import VuexPersistence from 'vuex-persist'
 
export default ({ store }) => {
  new VuexPersistence({
    key: process.env.vuexStorageKey,
    storage: window.localStorage
  }).plugin(store);
}