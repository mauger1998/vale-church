import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {deskStructure} from './components/deskStructure'
import ValeChurchLogo from './components/ValeChurchLogo'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'valeChurchStudio',
  title: 'Vale Church Studio',

  projectId: 'pxvhzoh0',
  dataset: 'production',
  studio: {
    components: {
      logo: ValeChurchLogo,
    },
  },

  plugins: [deskTool({structure: deskStructure}), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
