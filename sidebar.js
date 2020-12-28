import React from 'react';
import { MdStore as iconHome } from 'react-icons/md';
import S from '@sanity/desk-tool/structure-builder';
import { DocumentBuilder } from '@sanity/structure/lib/Document';

export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      S.listItem()
        .title('Home Page')
        .icon(iconHome)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
