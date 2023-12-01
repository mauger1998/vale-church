export default {
  name: 'room',
  title: 'Room',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'roomDescription',
      title: 'Room Description',
      type: 'text',
    },
    {
      name: 'roomImage',
      title: 'Room Image',
      type: 'customImage',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'icon', title: 'Icon', type: 'customImage'},
            {name: 'title', title: 'Title', type: 'string'},
          ],
        },
      ],
    },
  ],
}
