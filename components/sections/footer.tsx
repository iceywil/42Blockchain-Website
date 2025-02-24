import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-6 md:gap-0">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="42Blockchain logo"
              width={120}
              height={53}
              priority
              className="h-auto"
            />
          </Link>
        </div>
        <Navbar className="flex flex-wrap justify-center md:justify-end w-full md:flex-1" />
      </div>
      <div className="container mx-auto px-4 pb-4">
        <p className="text-gray-400 text-sm text-center">
          © {currentYear} 42Blockchain. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
