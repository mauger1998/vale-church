import {BsChatQuote} from 'react-icons/bs'
import {SlEvent} from 'react-icons/sl'
import {MdOutlineChurch} from 'react-icons/md'
import {SiCloudflarepages} from 'react-icons/si'

export const deskStructure = (S, context) =>
  S.list()
    .title('Vale Church Studio')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(MdOutlineChurch)
        .child(S.editor().schemaType('home').documentId('9d98e6ba-cf5e-4c46-a194-046c794b37c2')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['quote', 'whatsOnSection', 'prayers', 'home', 'media.tag', 'activities'].includes(
            listItem.getId(),
          ),
      ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['quote', 'whatsOnSection', 'featured', 'media.tag', 'home', 'activities'].includes(
            listItem.getId(),
          ),
      ),
      S.divider(),
      S.listItem()
        .title('Activities Page')
        .icon(SiCloudflarepages)
        .child(
          S.editor().schemaType('activities').documentId('cb7573b9-089a-4b59-b565-0b1bd7b9b4e1'),
        ),
      S.listItem()
        .title('What`s On')
        .icon(SlEvent)
        .child(
          S.editor()
            .schemaType('whatsOnSection')
            .documentId('b38e77d0-9f7a-45ff-8673-2d3d68807286'),
        ),
    ])
