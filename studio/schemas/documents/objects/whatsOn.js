import {SlEvent} from 'react-icons/sl'

export default {
  title: "What's On?",
  name: 'whatsOnSection',
  type: 'document',
  icon: SlEvent,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
    {
      title: 'Content',
      name: 'whatsOnContent',
      type: 'array',
      of: [
        {
          type: 'whatsOnCard',
        },
      ],
    },
  ],
}
