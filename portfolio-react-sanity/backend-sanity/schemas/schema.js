// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Our Custom Schemas 
import testimonials from './testimonials'
import works from './works'
import brands from './brands'
import about from './about'
import skills from './skills'
// import workExperience from './workexperience'
import experience from './experience'
import contact from './contact'
import workexperience from './workexperience'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    works,  
    testimonials, 
    brands,
    about,
    skills,
    // workExperience,
    workexperience, 
    experience,
    contact, 

  ]),
})
