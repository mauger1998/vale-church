import {GoQuestion} from 'react-icons/go'

export default {
  name: 'whoWhatWhereCard',
  title: 'Who What Where Card',
  type: 'object',
  icon: GoQuestion,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
}
