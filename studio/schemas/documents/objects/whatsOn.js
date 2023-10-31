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
      readOnly: true,
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
  initialValue: {
    title: 'What`s on section',
  },
}
