import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppToast from './AppToast';
import Image from "next/image";
import success from '@/public/images/icons/AlertSuccess.svg'
import error from '@/public/images/icons/AlertError.svg'
export const alerts = {
  success: (heading: React.ReactNode, body: React.ReactNode, duration?: number) => {
    return toast(<AppToast heading={heading} body={body} />, {
      icon: <Image src={success} alt='success toast' width={18} height={18} />,
      autoClose: duration
    });
  },
  error: (heading: React.ReactNode, body: React.ReactNode, duration?: number) => {
    return toast(<AppToast heading={heading} body={body} />, {
      icon: <Image src={error} alt='error toast' width={18} height={18} />,
      autoClose: duration
    });
  },
};