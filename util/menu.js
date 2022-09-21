export default function () {
  return [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      name: 'Dashboard',
      href: '/'
    },
    {
      title: 'Task',
      icon: 'mdi-card-text-outline',
      name: 'Task',
      href: '#',
      items: [
        {
          group: 'map',
          name: 'Map',
          title: 'Map',
          href: '/map'
        }
      ]
    }
  ]
}
