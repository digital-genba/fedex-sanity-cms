export default {
  title: 'Song',
  name: 'song',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Artist',
      name: 'artist',
      type: 'reference',
      to: [{ type: 'artist' }]
    },
    {
      title: 'Album',
      name: 'album',
      type: 'reference',
      to: [{ type: 'album' }],
    }
  ]
};
