import React from 'react'
import { Icon } from '@iconify/react';
import faceSad from '@iconify/icons-akar-icons/face-sad';

const FetchFailed = () => {
    return (
        <div className='FetchFailed'>
            <Icon icon={faceSad} className="SadFace"></Icon>
            <br></br>We are experiencing some issues. Please try again later.</div>
    )
}

export default FetchFailed