import {BsChatQuote} from 'react-icons/bs'

export default {
  title: 'Quote',
  name: 'quote',
  type: 'document',
  icon: BsChatQuote,
  fields: [
    {
      title: 'quote',
      name: 'Quote',
      type: 'text',
      Description: 'Please keep to a max of 160 characters',
    },
    {
      title: 'Emphasised Words',
      name: 'emphasisedWords',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
