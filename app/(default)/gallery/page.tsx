import { VideoPlayer } from '@/components/gallery/VideoPlayer'
import InstagramCarousel from '../../../components/gallery/InstagramCarousel'
import Link from 'next/link'

const getData = async() => {
  
  const insta_url = process.env.INSTAGRAM_URL

  if(!insta_url){
    throw new Error("Missing Instagram Url")
  }
  try {
    const res = await fetch(insta_url, { next: { revalidate: 3600 } })
    return await res.json()

  } catch (error) {
    throw new Error("Failed to fetch data")
  }
  
}

const Gallery = async() => {

  const feed = await getData()

  type MediaTypeOrder = {
    [key: string]: number;
  };

  const mediaTypeOrder: MediaTypeOrder = {
    CAROUSEL_ALBUM: 1,
    VIDEO: 2,
    IMAGE: 3,
  }

  const sortedFeed = feed?.data?.sort((a: { media_type: string },b: { media_type: string }) => mediaTypeOrder[a.media_type] - mediaTypeOrder[b.media_type])

  return (
   <div className='mt-[70px] bg-[#F9F9F9]'>
      <div className="mx-auto max-w-6xl pt-14 flex flex-col items-center">
        <div className="md:text-4xl text-2xl font-bold opacity-5" style={{position: 'absolute'}}>
          PACKMYLOAD ON INSTAGRAM</div>
        <div className="md:text-3xl text-xl text-[#566985] mt-4 font-bold" style={{ position: 'relative' }}>Packmyload on Instagram</div>
        <span className="section-separator"></span>

      </div>
      <br />

      <div className="flex mx-auto max-w-6xl justify-between w-[95%] md:w-[80%]">
        <p className='text-lg font-bold mt-2'>@packmyload</p>
        <Link 
          href={'https://www.instagram.com/packmyload/'}
          target='_blank'
        >
        <button 
        className="text-white border-2 text-base font-bold rounded-md p-2 bg-[#4BCBFE] outline-none">View Profile</button>
        </Link>
      </div>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 p-3 sm:p-3 md:p-0 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
        {sortedFeed?.map((post: any) => (
          <div key={post.id} className="rounded-lg overflow-hidden cursor-pointer">
            {post?.media_type === 'IMAGE' && (
                <img
                  src={post?.media_url}
                  alt={post?.caption || "Instagram Image"}
                  loading='lazy'
                  className='object-cover w-full h-[400px] transition-transform duration-300 transform-gpu hover:scale-110'
                />
            )}
            {post?.media_type === 'VIDEO' && (
              <VideoPlayer media_url={post?.media_url} />
            )}

          {post?.media_type === 'CAROUSEL_ALBUM' && (
            <InstagramCarousel images={post?.children?.data} />
            )}
          </div>
        ))}
      </div>
        <br />
    </div>
  )
}


export default Gallery