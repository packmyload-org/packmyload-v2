import OTPGenerator from 'otp-generator';

// Function to generate a 6-digit OTP
export async function generateSixDigitOTP() {
  // Generate a 6-digit numeric OTP
  const otp = OTPGenerator.generate(6, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });

  return otp;
}


