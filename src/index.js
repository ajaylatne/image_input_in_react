import React from 'react';
import ReactDOM from 'react-dom/client';
import GetImage from './component/GetImage';
import ShowImage from './component/ShowImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GetImage />
        <ShowImage/>
    </>
);