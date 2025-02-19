'use client'

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
const NavMenu = () => {
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const pathname=usePathname();

  // This hook will detect if the screen width is less than 1024px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize() // Check the initial size
    window.addEventListener('resize', handleResize) // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResize) // Cleanup on component unmount
    }
  }, [])

  const toggleMenu = () => {
    setIsActive((prevState) => !prevState)
  }

  return (
		<div className="nav-inner">
			<div className="nav-logo">
				<a href="/">
					<Image
						src="https://panalobetofficial.com/images/panalobet-logo.png"
						priority
						width={180}
						height={24}
						alt="Panalobet Logo"
					/>
				
				</a>

				{/* Burger Button for Mobile */}
				{isMobile && (
					<button
						className={`burger-btn ${isActive ? 'active' : ''}`}
						onClick={toggleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				)}
			</div>

			{/* Mobile Menu (Visible only for screens smaller than 1024px) */}
			{isMobile && (
				<div
					className="nav-menu"
					style={{
						width: isActive ? '100%' : '0',
						height: isActive ? 'auto' : '0',
						transition: 'width 0.3s ease, height 0.3s ease', // Optional transition for smooth opening/closing
					}}
				>
					<ul className="main-menu">
						<li className={pathname === '/' ? 'active' : ''}>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/live-casino">
								Live Casino
							</Link>
						</li>
						<li>
							<Link href="/fishing-game">
								Fishing Game
							</Link>
						</li>
						<li>
							<Link href="/slot-games">Slot</Link>
						</li>
						<li>
							<Link href="/cockfight">
								Cockfight
							</Link>
						</li>
						<li>
							<Link href="/promotion">
								Promotion
							</Link>
						</li>
						<li>
							<Link href="/contact">
								Contact Us
							</Link>
						</li>
						<li className={pathname === '/blogs' ? 'active' : ''}>
							<Link href="/blogs">Blog</Link>
						</li>
					</ul>
				</div>
			)}

			{/* Desktop Menu (Visible only for screens 1024px and above) */}
			{!isMobile && (
				<ul className="main-menu">
					<li className={pathname === '/' ? 'active' : ''}>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/live-casino">
								Live Casino
							</Link>
						</li>
						<li>
							<Link href="/fishing-game">
								Fishing Game
							</Link>
						</li>
						<li>
							<Link href="/slot-games">Slot</Link>
						</li>
						<li>
							<Link href="/cockfight">
								Cockfight
							</Link>
						</li>
						<li>
							<Link href="/promotion">
								Promotion
							</Link>
						</li>
						<li>
							<Link href="/contact">
								Contact Us
							</Link>
						</li>
						<li className={pathname === '/blogs' ? 'active' : ''}>
							<Link href="/blogs">Blog</Link>
						</li>
				</ul>
			)}
		</div>
	);
}

export default NavMenu
