import './Alert.css';
import { useEffect } from 'react';
import { alertInitialState } from '../../../constant';
import info from '../../../assets/alert/info.svg';
import success from '../../../assets/alert/success.svg';
import error from '../../../assets/alert/error.svg';
import warning from '../../../assets/alert/warning.svg';
import plusIcon from '../../../assets/alert/plusBold.svg';

const Alert = (props)=> {
    const {alert, setAlert} = props;
    
    useEffect(()=> {
        if(alert?.type) {
 setTimeout(() => {
            setAlert(alertInitialState);
        }, 5000);
        }    
    }, [alert]);

    const alertIcons = {
        info: info,
        success: success,
        error: error,
        warning: warning
    };

    return (
            alert?.type &&  <div className='alert-wrapper'>
            <div className={`alert-content ${alert?.type}-alert`}>
                <div className='alert-icon'>
                    <img src={alertIcons[alert?.type]} alt="alert" />
                </div>
                <div className='alert-text'>
                    <h4 className='alert-title'>{alert?.title}</h4>
                <p className='alert-message'>{alert?.message}</p>
                </div>
                <div className='close'>
                    <img src={plusIcon} alt="plus icon" onClick={() => setAlert(alertInitialState)}/>
                </div>
                
            </div>

        </div>
        
        
       
    )
};

export default Alert;