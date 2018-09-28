export default {
  title: 'Album',
  name: 'album',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'date',
    },
    {
      title: 'Artist',
      name: 'artist',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'artist' }]
      }]
    },
    {
      title: 'Songs',
      name: 'songs',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'song' }]
      }]
    }
  ]
};
