import {TbBuildingChurch} from 'react-icons/tb'

export default {
  name: 'services',
  title: 'Services',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
    {
      name: 'sundayServices',
      title: 'Sunday Services',
      type: 'array',

      of: [
        {
          type: 'object',
          icon: TbBuildingChurch,
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {
              name: 'time',
              title: 'Time',
              type: 'string',
              validation: (Rule) =>
                Rule.regex(
                  /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](AM|PM|am|pm)$/,
                  'must be a valid time in the format HH:MM AM/PM',
                ),
            },
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
    },
    {
      name: 'weekdayServices',
      title: 'Weekday Services',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: TbBuildingChurch,
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {
              name: 'time',
              title: 'Time',
              type: 'string',
              validation: (Rule) =>
                Rule.regex(
                  /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](AM|PM|am|pm)$/,
                  'must be a valid time in the format HH:MM AM/PM',
                ),
            },
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
