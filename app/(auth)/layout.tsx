import three_um_logo from '@/public/assets/IMG_0701 3.png';
import logo from '@/public/assets/IMG_0699 2.png';
import ID from '@/public/assets/ID.png';

import Image from 'next/image';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className='flex flex-col items-center mt-5'>
                <>
                    <Image src={three_um_logo} alt='company logo' width={80} height={80} />
                    <div className='flex flex-row mb-5'>
                        <Image src={logo} alt='logo' width={120} height={80} />
                        <Image src={ID} alt='ID' width={80} height={80} />
                    </div>

                </>
                {children}
            </div>

        </>
    )
}

export default layout