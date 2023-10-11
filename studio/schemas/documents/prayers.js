import {LiaPrayingHandsSolid} from 'react-icons/lia'

export default {
  title: 'Prayers',
  name: 'prayers',
  type: 'document',
  icon: LiaPrayingHandsSolid,
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
      description: 'Please keep to a maximum of 350 characters ',
    },
  ],
}
