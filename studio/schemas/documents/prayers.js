import {LiaPrayingHandsSolid} from 'react-icons/lia'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  title: 'Prayers',
  name: 'prayers',
  type: 'document',
  icon: LiaPrayingHandsSolid,
  orderings: [orderRankOrdering],

  fields: [
    orderRankField({type: 'prayers'}),

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
