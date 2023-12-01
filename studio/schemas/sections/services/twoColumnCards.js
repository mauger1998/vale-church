export default {
  name: 'twoColumnCards',
  title: 'Two Column With Cards',
  type: 'object',
  fields: [
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'card'}],
    },
  ],
}
