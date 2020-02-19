export default {
    type: 'object',
    name: 'landingPage',
    title: 'Landing Page',
    fields: [
      {
        name: 'label',
        type: 'string',
        title: 'Label',
      },
    //   {
    //     name: 'heading',
    //     type: 'string',
    //     title: 'Heading',
    //   },
    //   {
    //     name: 'text',
    //     type: 'portableText',
    //     title: 'Text',
    //   },
    ],
    preview: {
      select: {
        heading: 'label',
      },
      prepare({ heading }) {
        return {
          title: `${heading}`,
          subtitle: 'Landing Page',
        };
      },
    },
  };
  