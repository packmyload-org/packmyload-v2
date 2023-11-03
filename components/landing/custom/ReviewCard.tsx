import Image from 'next/image'
interface ReviewProp{
    text: string,
    name: string,
    profile?: string
}

export const ReviewCard: React.FC<ReviewProp> = ({text, name, profile}) => {

    const nameInitial = name.charAt(0)

    const quote_right = (

        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <g clip-path="url(#clip0_92_394)">
                <path d="M18.7468 7.13867C20.8057 7.13867 22.4787 8.79108 22.5119 10.8421C22.609 11.7728 22.5949 13.1457 21.9659 14.7307C21.3231 16.3505 20.0676 18.1176 17.7784 19.8345C17.3031 20.191 16.6287 20.0947 16.2721 19.6193C15.9156 19.1439 16.012 18.4696 16.4873 18.113C18.1701 16.851 19.1351 15.6239 19.6859 14.5521C19.3856 14.6291 19.071 14.6701 18.7468 14.6701C16.667 14.6701 14.981 12.9842 14.981 10.9044C14.981 8.82465 16.667 7.13867 18.7468 7.13867ZM9.06343 7.13867C11.1224 7.13867 12.7954 8.79108 12.8286 10.8421C12.9257 11.7728 12.9116 13.1457 12.2826 14.7307C11.6398 16.3505 10.3842 18.1176 8.09509 19.8345C7.61972 20.191 6.94533 20.0947 6.5888 19.6193C6.23226 19.1439 6.3286 18.4696 6.80397 18.113C8.48668 16.851 9.45177 15.6239 10.0026 14.5521C9.70237 14.6291 9.38768 14.6701 9.06343 14.6701C6.98367 14.6701 5.2977 12.9842 5.2977 10.9044C5.2977 8.82465 6.98367 7.13867 9.06343 7.13867Z" fill="#2E5F9E"/>
            </g>
            <defs>
                <clipPath id="clip0_92_394">
                <rect width="25.8222" height="25.8222" fill="white" transform="translate(0.994019 0.683105)"/>
                </clipPath>
            </defs>
        </svg>
    )

    const quote_left = (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <g clip-path="url(#clip0_92_400)">
                <path d="M9.26556 7.29826C9.74093 6.94173 10.4153 7.03807 10.7718 7.51343C11.1284 7.98881 11.032 8.6632 10.5567 9.01974C8.87396 10.2818 7.90888 11.5088 7.35806 12.5807C7.65827 12.5036 7.97296 12.4626 8.29721 12.4626C10.377 12.4626 12.0629 14.1486 12.0629 16.2284C12.0629 18.3081 10.377 19.9941 8.29721 19.9941C6.23827 19.9941 4.56526 18.3417 4.53198 16.2907C4.43494 15.36 4.4491 13.9871 5.07809 12.4021C5.72089 10.7822 6.97643 9.01512 9.26556 7.29826ZM18.9489 7.29826C19.4242 6.94173 20.0986 7.03807 20.4552 7.51343C20.8117 7.98881 20.7153 8.6632 20.24 9.01974C18.5572 10.2818 17.5922 11.5088 17.0414 12.5807C17.3415 12.5036 17.6562 12.4626 17.9805 12.4626C20.0603 12.4626 21.7463 14.1486 21.7463 16.2284C21.7463 18.3081 20.0603 19.9941 17.9805 19.9941C15.9215 19.9941 14.2486 18.3417 14.2153 16.2907C14.1183 15.36 14.1324 13.9871 14.7614 12.4021C15.4042 10.7822 16.6597 9.01512 18.9489 7.29826Z" fill="#2E5F9E"/>
            </g>
            <defs>
                <clipPath id="clip0_92_400">
                <rect width="25.8222" height="25.8222" fill="white" transform="translate(0.227783 0.627441)"/>
                </clipPath>
            </defs>
        </svg>
    )
    const star = (
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    )
    const rating = (
        <div className="flex items-center space-x-1">
            {star}
            {star}
            {star}
            {star}
            {star}
        </div>
    )
    return (

        <div className="relative bg-[#F3F7FF] p-2 sm:p-2 md:p-4 rounded-md shadow h-[330px] sm:h-[330px] md:h-[390px]">

            <div className="float-right">
                {quote_right}
            </div>
            <p className="clear-both p-4 sm:p-4 md:p-8">{text}</p>

            <div>
                {quote_left}
            </div>
            <div className="absolute bottom-3 w-[90%]">

                <div className="flex justify-between mt-1" id="rating">
                    <div className="name flex gap-2">
                        {
                            profile ?
                            <Image src={profile} alt="Moving Company in lagos & Abuja: review profile" className="w-[30px] h-[30px]" width={30} height={30} loading='lazy' />
                            :
                            <div className="relative inline-flex items-center justify-center w-[30px] h-[30px] overflow-hidden bg-gray-500 rounded-full dark:bg-gray-600">
                                <span className="font-bold text-white">{nameInitial}</span>
                            </div>
                        }
                        <p className="text-sm mt-1">{name}</p>
                    </div>
                    {rating}
                </div>
            </div>
        </div>
    )
}