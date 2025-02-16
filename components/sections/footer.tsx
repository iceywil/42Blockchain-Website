import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" border-t border-white/10">
      <div className="container mx-auto px-4 py-8 max-md:py-4 flex max-md:flex-col max-md:gap-4 md:justify-between md:items-center">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="42Blockchain logo"
            width={120}
            height={53}
            priority

          />
        </Link>
        <Navbar className="flex flex-wrap" />
      </div>
      <h2 className="text-gray-400 text-sm text-center  pt-4 mb-1">
        © {currentYear} 42Blockchain. All rights reserved.
      </h2>
    </footer>
  )
}
