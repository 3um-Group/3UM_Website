'use client'

import React from "react";
import DescribeCard from "./Describe_Card";
import image from '@/public/assets/dontaelopez_An_abstract_brain_ecosystem_3D_ultra_high_resolutio_a46c4c0f-dbaa-4b85-add7-1f874396beaf 2.png'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Link from "next/link";

const Describe = () => {
    const [sectionNum, setSectionNum] = React.useState(0);

    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <div className="font-bold sm:text-2xl text-lg text-center">Step Into the Internet of Tomorrow</div>
            <div className='flex mt-2.5 mb-5 text-lg justify-center gap-5 font-bold'>

                <Select defaultValue="0" onValueChange={(e) => { setSectionNum(parseInt(e)) }}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="3UM Finance" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>--Select--</SelectLabel>
                            <SelectItem value='0'>3UM Finance</SelectItem>
                            <SelectItem value='1'>3UM Genesis</SelectItem>
                            <SelectItem value='2'>ABQ Protocol</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>

            {sectionNum === 3 &&
                <DescribeCard
                    image={image}
                    title='3UM.ID'
                    content='ombining traditional, decentralized, and digital financial tools in one platform. It allows users to easily manage, create, and invest in various financial products using the latest in blockchain and AI technology.'
                />
            }
            {sectionNum === 0 &&
                <DescribeCard
                    image={image}
                    title='3UM Finance'
                    content=' 3UM Finance simplifies finance by ced, and digital financial tools in one platform. It allows users to easily manage, create, and invest in various financial products using the latest in blockchain and AI technology.'
                />
            }

            {sectionNum === 1 &&
                <DescribeCard
                    image={image}
                    title='3UM Genesis'
                    content=' 3UM Find digital financial tools in one platform. It allows users to easily manage, create, and invest in various financial products using the latest in blockchain and AI technology.'
                />}

            {sectionNum === 2 &&
                <DescribeCard
                    image={image}
                    title='ABQ Protocol'
                    content=' 3UM Finance simplifies finance by combining traditional, decentralized, and digital financial tools in one platform. It allows users to easily manage, create, and invest in various financial products using the latest in blockchain and AI technology.'
                />}
            <Link href='/root/ecosystem' className='bg-white mt-4 cursor-pointer border-[2px] border-blue-700 text-gradient rounded-full px-8 py-1'>VIEW MORE</Link>


        </div>
    )
}

export default Describe