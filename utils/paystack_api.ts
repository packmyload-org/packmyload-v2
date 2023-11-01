const paystackSecretKey: string = process.env.PAYSTACK_SECRET_KEY ?? '';
export async function initiatePaymentToPaystack(email: string, amount: number): Promise<any> {
  const paystackApiUrl: string = 'https://api.paystack.co/transaction/initialize';

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${paystackSecretKey}`,
  };

  const body: string = JSON.stringify({
   email,
   amount: (amount * 100),
   callback_url: 'https://packmyload.com/book/verify-payment'
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


export async function verifyPayment(transactionReference?: string): Promise<any> {
  const paystackApiUrl = `https://api.paystack.co/transaction/verify/${transactionReference}`;

  const headers = {
    Authorization: `Bearer ${paystackSecretKey}`,
  };

  try {
    const response = await fetch(paystackApiUrl, { headers });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  } catch (error) {
    return {
      status: false,
      message: `Error verifying payment: ${error}`,
    };
  }
}

