import { BsChatQuote } from 'react-icons/bs'
import { SlEvent } from 'react-icons/sl'

export const deskStructure = (S, context) =>
    S.list()
        .title('Vale Church Studio')
        .items([
            // Minimum required configuration
            S.listItem()
                .title('Quote')
                .icon(BsChatQuote)
                .child(
                    S.editor()
                        .schemaType('quote')
                        .documentId('3397f874-0e19-4198-8151-58d937f297ed')
                ),
            S.divider(),

            S.listItem()
                .title('What`s On')
                .icon(SlEvent)
                .child(
                    S.editor()
                        .schemaType('whatsOnSection')
                        .documentId('b38e77d0-9f7a-45ff-8673-2d3d68807286')
                ),
            S.divider(),

            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['quote', 'whatsOnSection', 'featured'].includes(
                        listItem.getId()
                    )
            ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['quote', 'whatsOnSection', 'prayers'].includes(
                        listItem.getId()
                    )
            ),
        ])
