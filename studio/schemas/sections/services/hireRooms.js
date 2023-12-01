export default {
  name: 'hireRooms',
  title: 'Hire Rooms',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'rooms',
      title: 'Rooms',
      type: 'array',
      of: [
        {
          type: 'room',
        },
      ],
    },
  ],
}
