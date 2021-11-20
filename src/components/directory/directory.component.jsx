import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
//store state values in class

class Directory extends React.Component {
    constructor(){
    super();

    this.state = {
        sections: [{
            title: 'hats',
            imageUrl: 'https://images.unsplash.com/photo-1513105737059-ff0cf0580ae6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            id: 2,
            linkUrl: ''
        },
         {
            title: 'sneakers',
            imageUrl: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80',
            id: 3
        },
        {
            title: 'womens',
            imageUrl: 'https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
            size: 'large',
            id: 4,
             linkUrl: ''
        },
        {
            title: 'mens',
            imageUrl: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80',
            size: 'large',
            id: 5,
            linkUrl: ''
        },
    ]
    }
    }

    render() {
        return(
             <div className='directory-menu'>
                 {this.state.sections.map(({ id, title, imageUrl, linkUrl}) => (
                     <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl}/>
                 ))}
             </div>
        )
    }
}

export default Directory