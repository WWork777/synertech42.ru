'use client'
import { navLinks } from '@/app/api/navlink'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import NavLink from './Navigation/NavLink'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const pathname = usePathname()

  const sideMenuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      setNavbarOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleScroll])

  const isHomepage = pathname === '/'

  return (
    <header className={`fixed h-16 sm:h-20 md:h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-3 sm:px-4 ${sticky ? "top-2 sm:top-3" : "top-0"}`}>
      <nav className={`container mx-auto max-w-8xl flex items-center justify-between py-3 sm:py-4 duration-300 ${sticky ? "shadow-lg bg-white rounded-full top-5 px-4 sm:px-6 md:px-8" : "shadow-none top-0"}`}>
        <div className='flex justify-between items-center gap-2 w-full'>
          <div>
            <Link href='/' className="flex items-center group">
              <svg width="140" height="40" viewBox="0 0 532 153" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105 rounded-[8px] overflow-hidden sm:w-auto md:w-full md:max-w-xs lg:max-w-sm">
                <path d="M532 0H0V152H532V0Z" fill="#E83C39"/>
                <path d="M167.018 105.593C167.018 111.027 165.09 115.673 161.233 119.53C157.376 123.386 152.731 125.315 147.296 125.315H143.878C138.443 125.315 133.797 123.386 129.941 119.53C126.084 115.673 124.156 111.027 124.156 105.593V56.6822C124.156 51.2477 126.084 46.6021 129.941 42.7454C133.797 38.8886 138.443 36.9602 143.878 36.9602H147.296C152.731 36.9602 157.376 38.8886 161.233 42.7454C165.09 46.6021 167.018 51.2477 167.018 56.6822V70.2247H152.555C152.555 69.4358 152.599 68.1648 152.687 66.4118C152.774 64.571 152.818 63.2124 152.818 62.3359C152.818 54.0965 150.32 49.9768 145.324 49.9768C140.853 49.9768 138.618 53.2199 138.618 59.7063V102.043C138.618 108.529 141.029 111.772 145.85 111.772C151.197 111.772 153.432 108.529 152.555 102.043V90.6041H167.018V105.593ZM214.495 38.6695L214.363 124H202.004L201.873 75.8783L187.41 124H173.736L174.13 38.6695H186.752L186.621 85.2134L200.558 38.6695H214.495ZM263.793 124H249.857V89.8152H237.234L237.366 124H223.429L223.561 38.6695H237.234V72.4598L249.857 72.3284L249.988 38.6695H263.662L263.793 124ZM311.389 111.772L311.258 124H271.419L271.288 38.6695L311.258 38.538L311.126 50.7656H285.225L285.093 73.9061L311.258 73.7746L311.126 86.0023H284.962L285.093 111.641L311.389 111.772ZM359.744 79.2968C359.744 84.819 358.21 89.2893 355.142 92.7078C352.162 96.0386 347.955 97.704 342.52 97.704H330.424V124H316.75V37.0917L340.022 36.9602C345.457 36.9602 350.102 38.8886 353.959 42.7454C357.816 46.6021 359.744 51.2477 359.744 56.6822V79.2968ZM346.596 75.7468V59.7063C346.596 55.4113 346.07 52.5625 345.018 51.1601C343.616 49.407 340.723 48.5305 336.341 48.5305H330.293L330.424 86.6597C335.859 86.7473 338.576 86.7912 338.576 86.7912C341.819 86.7912 344.054 85.6955 345.281 83.5042C346.158 81.9264 346.596 79.3406 346.596 75.7468ZM406.542 50.7656H393.131L393.262 124H379.588L379.457 50.7656H366.44L366.309 38.538H406.41L406.542 50.7656ZM451.6 111.772L451.469 124H411.63L411.499 38.6695L451.469 38.538L451.337 50.7656H425.436L425.304 73.9061L451.469 73.7746L451.337 86.0023H425.173L425.304 111.641L451.6 111.772ZM502.716 124H486.413L469.583 96.3892V124H455.909V38.6695H469.583V64.7025L486.281 38.6695H502.585L472.607 81.1375L502.716 124Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M58.6403 99.981C55.7603 99.931 52.8903 98.861 50.6203 96.741C48.0803 94.371 46.8003 91.151 46.8103 87.921C46.8103 87.901 46.8103 87.881 46.8103 87.861C46.8103 85.201 45.7603 82.541 43.6603 80.581C39.6503 76.831 33.3603 77.041 29.6103 81.051C25.8603 85.061 26.0703 91.351 30.0803 95.101C31.8803 96.791 34.1503 97.671 36.4403 97.771C36.6503 97.771 36.8503 97.771 37.0603 97.771C39.8503 97.871 42.6203 98.951 44.8103 101.001C47.2803 103.311 48.5603 106.431 48.6203 109.571C48.6203 109.761 48.6203 109.951 48.6203 110.131C48.6803 112.711 49.7403 115.261 51.7703 117.171C55.7803 120.921 62.0703 120.711 65.8203 116.701C69.5703 112.691 69.3603 106.401 65.3503 102.651C63.4803 100.901 61.1103 100.011 58.7303 99.971C58.7003 99.971 58.6703 99.971 58.6403 99.971V99.981Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M52.0998 73.2802C56.1098 77.0302 62.3998 76.8202 66.1498 72.8102C67.8398 71.0102 68.7198 68.7402 68.8198 66.4502C68.8198 66.2402 68.8198 66.0402 68.8198 65.8302C68.9198 63.0402 69.9998 60.2702 72.0498 58.0802C74.3598 55.6102 77.4798 54.3302 80.6198 54.2702C80.7498 54.2702 80.8698 54.2702 80.9998 54.2702C81.0498 54.2702 81.0998 54.2702 81.1498 54.2702C83.9398 54.3702 86.7098 55.4502 88.8998 57.5002C91.3698 59.8102 92.6498 62.9302 92.7098 66.0702C92.7098 66.1302 92.7098 66.1802 92.7098 66.2402C92.7098 66.2702 92.7098 66.3002 92.7098 66.3302C92.6598 69.2102 91.5898 72.0802 89.4698 74.3502C87.0998 76.8902 83.8798 78.1702 80.6598 78.1602C80.6398 78.1602 80.6198 78.1602 80.5998 78.1602C77.9398 78.1602 75.2798 79.2102 73.3198 81.3102C69.5698 85.3202 69.7798 91.6102 73.7898 95.3602C75.5898 97.0502 77.8598 97.9302 80.1498 98.0302C80.3598 98.0302 80.5598 98.0302 80.7698 98.0302C83.5598 98.1302 86.3298 99.2102 88.5198 101.26C90.9898 103.57 92.2698 106.69 92.3298 109.83C92.3298 110.02 92.3298 110.21 92.3298 110.39C92.3898 112.97 93.4498 115.52 95.4798 117.43C99.4898 121.18 105.78 120.97 109.53 116.96C113.28 112.95 113.07 106.66 109.06 102.91C107.19 101.16 104.82 100.27 102.44 100.23C102.41 100.23 102.38 100.23 102.35 100.23C99.4698 100.18 96.5998 99.1102 94.3298 96.9902C91.7898 94.6202 90.5098 91.4002 90.5198 88.1702C90.5198 88.1502 90.5198 88.1302 90.5198 88.1102C90.5198 88.0402 90.5198 87.9702 90.5198 87.9002C90.6198 85.1102 91.6998 82.3402 93.7498 80.1502C96.0598 77.6802 99.1798 76.4002 102.32 76.3402C102.51 76.3402 102.7 76.3402 102.88 76.3402C105.46 76.2802 108.01 75.2202 109.92 73.1902C113.67 69.1802 113.46 62.8902 109.45 59.1402C107.58 57.3902 105.21 56.5002 102.83 56.4602C102.8 56.4602 102.77 56.4602 102.74 56.4602C99.8598 56.4102 96.9898 55.3402 94.7198 53.2202C92.1798 50.8502 90.8998 47.6302 90.9098 44.4102C90.9098 44.4102 90.9098 44.3602 90.9098 44.3502C90.9098 41.6902 89.8598 39.0302 87.7598 37.0702C83.7498 33.3202 77.4598 33.5302 73.7098 37.5402C71.9598 39.4102 71.0698 41.7802 71.0298 44.1602C71.0298 44.1902 71.0298 44.2202 71.0298 44.2502C70.9798 47.1302 69.9098 50.0002 67.7898 52.2702C65.4198 54.8102 62.1998 56.0902 58.9698 56.0802C58.9498 56.0802 58.9298 56.0802 58.9098 56.0802C56.2498 56.0802 53.5898 57.1302 51.6298 59.2302C47.8798 63.2402 48.0898 69.5302 52.0998 73.2802Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M76.12 71.0808C78.87 73.6508 83.17 73.5008 85.74 70.7608C88.31 68.0108 88.16 63.7108 85.42 61.1408C82.67 58.5708 78.37 58.7208 75.8 61.4608C73.23 64.2108 73.38 68.5108 76.12 71.0808Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M54.0907 93.3904C56.8407 95.9604 61.1407 95.8104 63.7107 93.0704C66.2807 90.3204 66.1307 86.0204 63.3907 83.4504C60.6407 80.8804 56.3407 81.0304 53.7707 83.7704C51.2007 86.5204 51.3507 90.8204 54.0907 93.3904Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M76.12 114.81C78.87 117.38 83.17 117.23 85.74 114.49C88.31 111.74 88.16 107.44 85.42 104.87C82.67 102.3 78.37 102.45 75.8 105.19C73.23 107.94 73.38 112.24 76.12 114.81Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M32.0301 71.0808C34.7801 73.6508 39.0802 73.5008 41.6502 70.7608C44.2202 68.0108 44.0702 63.7108 41.3302 61.1408C38.5802 58.5708 34.2801 58.7208 31.7101 61.4608C29.1401 64.2108 29.2901 68.5108 32.0301 71.0808Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M54.0907 49.4304C56.8407 52.0004 61.1407 51.8504 63.7107 49.1104C66.2807 46.3604 66.1307 42.0604 63.3907 39.4904C60.6407 36.9204 56.3407 37.0704 53.7707 39.8104C51.2007 42.5604 51.3507 46.8604 54.0907 49.4304Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M98.0204 49.2107C100.77 51.7807 105.07 51.6307 107.64 48.8907C110.21 46.1407 110.06 41.8407 107.32 39.2707C104.57 36.7007 100.27 36.8507 97.7004 39.5907C95.1304 42.3407 95.2804 46.6407 98.0204 49.2107Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M98.0204 93.3904C100.77 95.9604 105.07 95.8104 107.64 93.0704C110.21 90.3204 110.06 86.0204 107.32 83.4504C104.57 80.8804 100.27 81.0304 97.7004 83.7704C95.1304 86.5204 95.2804 90.8204 98.0204 93.3904Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M32.0301 114.81C34.7801 117.38 39.0802 117.23 41.6502 114.49C44.2202 111.74 44.0702 107.44 41.3302 104.87C38.5802 102.3 34.2801 102.45 31.7101 105.19C29.1401 107.94 29.2901 112.24 32.0301 114.81Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M32.0301 49.2107C34.7801 51.7807 39.0802 51.6307 41.6502 48.8907C44.2202 46.1407 44.0702 41.8407 41.3302 39.2707C38.5802 36.7007 34.2801 36.8507 31.7101 39.5907C29.1401 42.3407 29.2901 46.6407 32.0301 49.2107Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M58.9704 56.0806C56.0904 56.0306 53.2204 54.9606 50.9504 52.8406C48.4104 50.4706 47.1304 47.2506 47.1404 44.0206C47.1404 44.0006 47.1404 43.9806 47.1404 43.9606C47.1404 41.3006 46.0904 38.6406 43.9904 36.6806C39.9804 32.9306 33.6904 33.1406 29.9404 37.1506C26.1904 41.1606 26.4003 47.4506 30.4104 51.2006C32.2104 52.8906 34.4804 53.7706 36.7704 53.8706C36.9804 53.8706 37.1803 53.8706 37.3903 53.8706C40.1803 53.9706 42.9504 55.0506 45.1404 57.1006C47.6104 59.4106 48.8904 62.5306 48.9504 65.6706C48.9504 65.8606 48.9504 66.0506 48.9504 66.2306C49.0104 68.8106 50.0703 71.3606 52.1003 73.2706C56.1103 77.0206 62.4004 76.8106 66.1504 72.8006C69.9004 68.7906 69.6904 62.5006 65.6804 58.7506C63.8104 57.0006 61.4404 56.1106 59.0604 56.0706C59.0304 56.0706 59.0004 56.0706 58.9704 56.0706V56.0806Z" fill="white"/>
              </svg>
            </Link>
          </div>
          <div className='flex items-center gap-2 sm:gap-6'>
            <div className={`hidden md:block text-xs md:text-sm lg:text-base`}>
              <Link href='tel:+79950613997' className='flex items-center gap-2 border-r pr-4 md:pr-6 text-dark hover:text-primary border-dark/20'
              >
                <Icon icon={'ph:phone-bold'} width={20} height={20} className="md:w-6 md:h-6" />
                <span className="hidden lg:inline">+7 (995) 061-39-97</span>
              </Link>
            </div>
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`flex items-center gap-3 p-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:cursor-pointer border ${isHomepage
                  ? sticky
                    ? 'text-white bg-primary hover:bg-primary-hover border-primary'
                    : 'text-dark bg-white hover:bg-primary hover:text-white hover:border-primary border-white'
                  : 'bg-primary text-white hover:bg-primary-hover border-primary duration-300'
                  }`}
                aria-label='Toggle mobile menu'>
                <span>
                  <Icon icon={'ph:list'} width={24} height={24} />
                </span>
                <span className='hidden sm:block'>Меню</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {
        navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )
      }

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-primary shadow-lg transition-transform duration-300 max-w-2xl ${navbarOpen ? 'translate-x-0' : 'translate-x-full'} z-50 px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className='flex items-center justify-start py-10'>
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label='Close mobile menu'
                className='bg-white p-3 rounded-full hover:cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'>
                  <path
                    fill='none'
                    stroke='black'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <nav className='flex flex-col items-start gap-4'>
              <ul className='w-full'>
                {navLinks.map((item, index) => (
                  <NavLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                ))}
              </ul>
            </nav>
          </div>

          <div className='flex flex-col gap-3 my-16 text-white border-t border-white/20 pt-8'>
            <p className='text-lg sm:text-xl font-semibold text-white mb-2'>
              Контакты
            </p>
            <div className='flex flex-col gap-2'>
              <Link href="mailto:synertech42@yandex.ru" className='text-base sm:text-lg font-normal text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                synertech42@yandex.ru
              </Link>
              <Link href="tel:+79950613997" className='text-base sm:text-lg font-normal text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
                +7 (995) 061-39-97
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header

