import Footer from 'components/footer';
import Navbar from 'components/navbar';
import Socials from 'components/socials';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="text-center mt-[20vh]">
                <p className="font-semibold text-pink-600 text-6xl md:text-7xl mb-8 md:mb-11">Oops</p>
                <p className="font-medium text-pink-600 text-3xl md:text-4xl mb-4 md:mb-5">Something Went Wrong</p>
                <p className="font-normal text-neutral-800 text-xl md:text-2xl">Error 404 Page Not Found</p>
            </div>
            <Footer />
            <Socials />
        </div>
    );
}
