import Image from 'next/image'
import bannerImg from '../../public/images/banner.jpg'

function NavBar(): JSX.Element {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 ml-5 p-1">
                <Image
                    alt=""
                    width={50}
                    height={50}
                    className="mask mask-hexagon"
                    src="/logo/logo.gif"
                />
                <a className="font-bold normal-case text-xl p-3">Goh Chun Teck</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal">
                    <li>
                        <a
                            href="https://dev.ct-goh.com/resume.pdf"
                            target="_blank"
                            className="font-medium"
                        >
                            <i className="fa fa-book" />
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            className="mt-1"
                            href="https://www.linkedin.com/in/goh-chun-teck"
                            target="_blank"
                        >
                            <i className="fa fa-linkedin" />
                        </a>
                    </li>
                    <li>
                        <a className="mt-1" href="https://github.com/ctgjdw" target="_blank">
                            <i className="fa fa-git fa-lg" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Footer(): JSX.Element {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current"
                >
                    <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p>Made with NextJS and daisyUI</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="mailto:gohchunteck@hotmail.com" target="_blank" className="btn btn-sm">
                    <i className="fa fa-envelope"></i>
                </a>
                <a
                    href="https://www.facebook.com/gohchunteck"
                    target="_blank"
                    className="btn btn-sm"
                >
                    <i className="fa fa-facebook"></i>
                </a>
            </div>
        </footer>
    )
}

function Banner(): JSX.Element {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bannerImg.src})`,
            }}
        >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-10 text-5xl font-bold text-accent-focus">
                        Backend | DevOps Engineer
                    </h1>
                    <p className="mb-10 text-xl text-neutral-content">
                        My passion & motivation is learning about new{' '}
                        <span className="text-accent-focus">technologies</span> and
                        <span className="text-accent-focus"> architectures</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <NavBar />
            <Banner />
            <Footer />
        </main>
    )
}
