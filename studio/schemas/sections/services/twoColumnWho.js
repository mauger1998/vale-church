import {TbCards} from 'react-icons/tb'

export default {
  name: 'twoColumnWho',
  title: 'Two Column With Who What Where Cards',
  type: 'object',
  icon: TbCards,
  fields: [
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },

    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'whoWhatWhereCard'}],
    },
  ],
  preview: {
    select: {
      title: 'mainTitle',
      subtitle: 'subTitle',
      media: 'image' || icon,
    },
  },
}
