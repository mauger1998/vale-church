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
  // preview using the image from the first room
  preview: {
    select: {
      title: 'title',
      media: 'rooms.0.roomImage',
    },
  },
}
