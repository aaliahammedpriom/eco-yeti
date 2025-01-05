import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen '>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div>
    );
};

export default Loading;