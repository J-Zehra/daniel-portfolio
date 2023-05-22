export default {
  name: 'artworks',
  type: 'document',
  title: 'Artworks',
  fields: [
    {
      name: 'artwork_name',
      type: 'string',
      title: 'Artwork Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'artwork_image',
      type: 'image',
      title: 'Artwork Image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
}
