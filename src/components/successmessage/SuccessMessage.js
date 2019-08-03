import React from 'react';
import './success-message.less';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

export const SuccessMessage = () => {
    return(
        <div className="successmessaage-wrapper">
            <FontAwesomeIcon icon={faCheckCircle} size="3x" />
            <p>Data saved successfully !</p>
            <span className="modal-note">This modal close automatically after few seconds.</span>
        </div>
    )
}

export default SuccessMessage;