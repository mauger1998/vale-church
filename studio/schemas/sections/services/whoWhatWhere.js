import {FaRegBell} from 'react-icons/fa'

export default {
  name: 'whoWhatWhere',
  title: 'Who What Where',
  type: 'object',
  icon: FaRegBell,
  fields: [
    {
      name: 'mainTitle',
      title: 'MainTitle',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'SubTitle',
      type: 'string',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'whoWhatWhereCard'}],
    },
  ],
}
