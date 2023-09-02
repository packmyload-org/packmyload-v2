import  Image from 'next/image'

interface MovingServiceProps{
    IconSrc: string,
    title: string,
    body: string
}

const MovingServiceCard: React.FC<MovingServiceProps> = ({IconSrc, title, body}) => {

    const containerStyle = {
        background: 'repeating-linear-gradient( 60deg, #4477CE, #4477CE 5px, #2E5F9E 10px, #2E5F9E 30px)'
    }
     return (
        <div className="max-w-sm p-6 mx-auto text-white border border-gray-200 rounded-lg shadow" style={containerStyle}>
            <Image 
                src={IconSrc}
                width={70}
                height={70}
                alt='call icon'
                className='float-right'
            />
            <div className='clear-both' />
            <div className="p-3">
                <h2 className="mb-3 font-bold text-lg">
                    {title}
                </h2>
                <p className='text-base'>
                    {body}
                </p>
            </div>
        </div>
     )
}

export default MovingServiceCard