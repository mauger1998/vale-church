import {MdOutlineTapAndPlay} from 'react-icons/md'

export default {
  name: 'getInvolved',
  title: 'Get Involved',
  type: 'object',
  icon: MdOutlineTapAndPlay,
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
