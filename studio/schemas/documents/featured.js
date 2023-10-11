import {AiOutlineStar} from 'react-icons/ai'

export default {
  title: 'Featured',
  name: 'featured',
  type: 'document',
  icon: AiOutlineStar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'emphasisedWord',
      title: 'Emphasised Word',
      type: 'string',
      description:
        'Here you can write which word from your title you want to be in the fancy hand writing font, please only include words that are actually in your title and make sure you spell them correctly to avoid errors. ',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'Please keep to a maximum of 350 characters ',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
