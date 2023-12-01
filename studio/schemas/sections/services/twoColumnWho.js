export default {
  name: 'twoColumnWho',
  title: 'Two Column With Who What Where Cards',
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
      of: [{type: 'whoWhatWhereCard'}],
    },
  ],
}
