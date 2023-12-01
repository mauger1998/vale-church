export default {
  name: 'cards',
  title: 'Cards',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'card',
        },
      ],
    },
  ],
}
