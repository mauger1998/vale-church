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
  // preview using the image from the first card
  preview: {
    select: {
      title: 'title',
      media: 'cards.0.image',
    },
  },
}
