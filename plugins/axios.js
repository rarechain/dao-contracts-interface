export default function (context) {
  context.$axios.onRequest(config => {
    if (context.store.state.tenantId) {
      config.headers.common['TenantId'] = context.store.getters.getTenant
    }
  })
}