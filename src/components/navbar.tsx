import Link from 'next/link'
import Image from 'next/image'
import questoria from '../../public/logoquestoria.png'

type NavbarMenuType = {
  name: string
  url: string
}

export function Navbar() {
  const menus: NavbarMenuType[] = [
    {
      name: 'Join Waitlist',
      url: '/#dashboard',
    },
  ]

  return (
    <div className="w-full px-4 fixed z-40 top-[18px] flex justify-center">
      <header className="w-full max-w-[500px] py-3 px-4 shadow-[0_-1px_0_1px_#33333350] 
        bg-black/30 backdrop-blur-[10px] rounded-2xl flex items-center justify-between">
        <div className="w-[170px] h-[50px] relative shrink-0">
          <Link href="/" className="w-full h-full block">
            <Image 
              src={questoria} 
              alt="questoria logo" 
              fill 
              priority 
              quality={100}
              className="object-contain" 
            />
          </Link>
        </div>
        
        <nav className="flex items-center">
          <ul className="flex items-center justify-center gap-6">
            {menus.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.url}
                  className="text-marfin text-sm font-nunito-sans font-normal
                    hover:text-white hover:underline focus:text-white focus:underline 
                    underline-offset-2 transition-all duration-200 whitespace-nowrap"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}