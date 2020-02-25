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
  