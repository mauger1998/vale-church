export default {
  name: 'history',
  title: 'History',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'History Page',
      readOnly: true,
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      options: {
        sortable: false,
      },
      of: [{type: 'fullColumn'}, {type: 'historySection'}, {type: 'whoWhatWhere'}],
    },
  ],
}
