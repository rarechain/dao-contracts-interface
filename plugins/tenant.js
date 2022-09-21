export default function ( context, inject) {
  const currentTenant = localStorage.getItem('currentTenant')

  if (currentTenant && currentTenant !== "") {
    context.store.commit('setCurrentTenant', JSON.parse(currentTenant))
    context.$axios.setBaseURL(context.store.getters.getCurrentTenant.url)
  }
}