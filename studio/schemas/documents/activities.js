export default {
  name: 'activities',
  title: 'Activities',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Activities Page',
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
        {type: 'hireRooms'},
        {type: 'twoColumn'},
        {type: 'twoColumnCards'},
        {type: 'whoWhatWhere'},
        {type: 'twoColumnWho'},
        {type: 'cards'},
        {type: 'getInvolved'},
      ],
    },
  ],
}
