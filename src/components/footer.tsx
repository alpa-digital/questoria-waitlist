import Link from 'next/link'
import Image from 'next/image'
import questoria from '../../public/logoquestoria.png'

export function Footer() {
  return (
    <footer className="max-w-[1060px] w-full mx-auto py-8 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:justify-between text-sm mt-[100px]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="w-[170px] h-[50px] relative">
          <Link href="/" className="w-full h-full">
            <Image src={questoria} alt="questoria logo" fill priority quality={100} />
          </Link>
        </div>

        <div
          role="separator"
          className="hidden md:block w-[1px] h-[16px] bg-[#333]"
        ></div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/terms-of-useaa"
            className="text-sm text-[#999] hover:text-marfin hover:underline focus:text-marfin focus:underline underline-offset-2 transition-all duration-200"
          >
            Términos de uso
          </Link>
        </div>
      </div>
      &copy; 2024 Q|uestoria, All Rights Reserved.
    </footer>
  )
}
