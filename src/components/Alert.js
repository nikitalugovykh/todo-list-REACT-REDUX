import React from 'react';

export const Alert = ({ text }) => {
    return  <div className="alert alert-warning" role="alert">
        {text}
    </div>

}