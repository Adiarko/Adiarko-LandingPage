import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky bg-white backdrop-opacity-10 top-0 z-50 shadow-sm ">
      <div className="flex container h-16 items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <img src="/logo_adiarko.jpg" className="w-6 h-6 mb-auto" alt="" />
          <span className="font-semibold text-xl">Adiarko</span>
        </Link>
        <nav className="hidden lg:gap-8 lg:flex">
          <Link
            className="font-normal text-sm hover:font-semibold"
            href="/#service"
          >
            Service
          </Link>
          <Link
            className="font-normal text-sm hover:font-semibold"
            href="/#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="font-normal text-sm hover:font-semibold"
            href="/career"
          >
            Karir
          </Link>
        </nav>
        <div className="hidden lg:flex">
          <Link href="/get-started">
            <div className="rounded-3xl text-xs py-2 px-4 bg-black text-white cursor-pointer">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
