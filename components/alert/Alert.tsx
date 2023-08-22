import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AlertProps{
    content: string
}
const Alert: React.FC<AlertProps> = ({content}) => {

    const notify = () => toast(content,{
        theme: "dark"
      });

    notify()

    return (
      <div>
        <ToastContainer />
      </div>
    );
}

export default Alert