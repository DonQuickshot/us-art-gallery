import { defineField, defineType } from 'sanity'

export const newsType = defineType({
  name: 'news',
  title: 'News & Announcements',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      type: 'string', 
      title: 'Announcement Title',
      validation: Rule => Rule.required() 
    }),
    defineField({ 
      name: 'publishedAt', 
      type: 'datetime', 
      title: 'Publish Date & Time',
      initialValue: () => new Date().toISOString() 
    }),
    defineField({ 
      name: 'body', 
      type: 'text', 
      title: 'Content / Message Body' 
    }),
    // 1. Single Main Image Upload Option
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Feature Image (Single)',
      options: {
        hotspot: true, // Allows your client to crop/focus the image inside Sanity
      },
    }),
    // 2. Multiple Images Upload Option (Gallery)
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Additional Images Gallery (Multiple)',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text (For screen readers)',
            }
          ]
        }
      ],
    }),
  ],
})
