import {PiQuotesFill} from 'react-icons/pi'

export default {
  name: 'quoteSection',
  title: 'Quote Section',
  type: 'object',
  icon: PiQuotesFill,
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
  ],
}
