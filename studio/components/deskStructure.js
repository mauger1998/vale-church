import {IoBookOutline} from 'react-icons/io5'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {AiOutlineStar} from 'react-icons/ai'
import {SlEvent} from 'react-icons/sl'
import {MdOutlineChurch} from 'react-icons/md'
import {SiCloudflarepages} from 'react-icons/si'
import {LiaPrayingHandsSolid} from 'react-icons/lia'

export const deskStructure = (S, context) =>
  S.list()
    .title('Vale Church Studio')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(MdOutlineChurch)
        .child(S.editor().schemaType('home').documentId('9d98e6ba-cf5e-4c46-a194-046c794b37c2')),
      orderableDocumentListDeskItem({
        title: 'Featured Sections',
        type: 'featured',
        icon: AiOutlineStar,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        title: 'Prayers',
        type: 'prayers',
        icon: LiaPrayingHandsSolid,
        S,
        context,
      }),
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
      S.divider(),
      S.listItem()
        .title('History & Magazine Page')
        .icon(IoBookOutline)
        .child(S.editor().schemaType('history').documentId('c3883a0e-6bc8-4837-940c-102768e3eea6')),
    ])
