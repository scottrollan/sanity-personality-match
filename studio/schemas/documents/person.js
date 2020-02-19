export default {
    name: 'person',
    type: 'document',
    title: 'Employee',
    fields: [
      {
        name: 'fullName',
        type: 'string',
        title: 'Full Name',
        required: true
      },
      {
          name: 'title',
          type: 'string',
          title: 'Title'
      },
      {
          name: 'organization',
          type: 'string',
          title: 'Company/Organization'
      },
      {
        title: 'My Profile Image',
        name: 'image',
        type: 'image',
        required: true
      },
      {
        title: 'Personality Score',
        name: 'score',
        type: 'number'
      }      
    ]
  }
  