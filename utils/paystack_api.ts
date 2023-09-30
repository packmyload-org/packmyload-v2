export async function initiatePaymentToPaystack(email: string, amount: number): Promise<any> {
  const paystackSecretKey: string = process.env.PAYSTACK_SECRET_KEY ?? '';
  const paystackApiUrl: string = 'https://api.paystack.co/transaction/initialize';

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${paystackSecretKey}`,
  };

  const body: string = JSON.stringify({
   email,
   amount: (amount * 100),
   callback_url: 'https://packmyload-v3.vercel.app'
  });

  try {
    const response: Response = await fetch(paystackApiUrl, {
      method: 'POST',
      headers,
      body,
    });

    if (response.ok) {
      const data: any = await response.json();
      return data;
    } else {
      const errorData: any = await response.json();
      throw new Error(errorData.message);
    }
  } catch (error) {
   console.log(error)
   throw new Error(`Error initiating payment`);
  }
}


