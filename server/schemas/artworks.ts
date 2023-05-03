export default {
    name: 'artworks',
    type: 'document',
    title: 'Artworks',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'artwork_image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
      },
    ],
  }