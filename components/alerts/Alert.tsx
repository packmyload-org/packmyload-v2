import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppToast from './AppToast';
import Image from "next/image";
export const alerts = {
  success: (heading: React.ReactNode, body: React.ReactNode, duration?: number) => {
    return toast(<AppToast heading={heading} body={body} />, {
      icon: <Image src='@/public/img/AlertSuccess.svg' alt='success toast' width={18} height={18} />,
      autoClose: duration
    });
  },
  error: (heading: React.ReactNode, body: React.ReactNode, duration?: number) => {
    return toast(<AppToast heading={heading} body={body} />, {
      // icon: ,
      autoClose: duration
    });
  },
};