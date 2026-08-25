import Image from "next/image";
import Link from "next/link";
type ComponentCardProps = {
    name: string;
    description: string;
    image: string;
    href: string;
    protocol: string;

};
export default function ComponentCard({
name,
description,
image,
href,
protocol

}: ComponentCardProps){
    return ( 
        <Link href={href}>
         <div className="border rounded-xl hover: shadow-lg transtion">
         <Image 
          src={image}
          alt={'${name} Architecture'}
          width={600}
          height={400}
          className="rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">
             {name}
          </h2>
          <p className="mt-2">
            {description}
          </p>
          <p className="mt-3 text-sm">
            Protocol: {protocol}
          </p>
         </div>
        </Link>

    );
    
}
