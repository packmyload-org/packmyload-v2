/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  unoptimized: true,
   domains: [
     "images.unsplash.com",
     "res.cloudinary.com",
   ],
 },
};

module.exports = nextConfig
