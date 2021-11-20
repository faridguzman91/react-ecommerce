import React from 'react';

import './preview-collection.styles.scss';

//PASS TITLE ITEMS PROPS
const PreviewCollection = ({title, items }) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {/* map items with id key */}

            {
                items.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>

)

export default PreviewCollection