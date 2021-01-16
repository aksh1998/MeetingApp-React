import React from 'react';

const FormError = ({ theMessage }) => {
    return (
        <div className="col-12 alert alert-danger px-3">
            {theMessage}
        </div>
    );
}

export default FormError;