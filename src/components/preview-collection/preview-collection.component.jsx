import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

//PASS TITLE ITEMS PROPS
const PreviewCollection = ({title, items }) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {/* map items with id key */}

            {
                items
                .filter((item , idx) => idx < 4)
                .map(({id, ...otherItemProps }) =>(
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>

)

export default PreviewCollection