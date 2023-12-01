export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home Page',
      readOnly: true,
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      options: {
        sortable: false,
      },
      of: [
        {type: 'whoWhatWhereCard'},
        {type: 'cards'},
        {type: 'hireRooms'},
        {type: 'twoColumnCards'},
        {type: 'twoColumnWho'},
        {type: 'whoWhatWhere'},
        {type: 'cta'},
        {type: 'fullColumn'},
        {type: 'getInvolved'},
        {type: 'quoteSection'},
        {type: 'services'},
        {type: 'twoColumn'},
      ],
    },
  ],
}
