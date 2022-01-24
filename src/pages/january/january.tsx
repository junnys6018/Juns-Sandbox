import Footer from 'components/footer';
import Heading from 'components/heading';
import Navbar from 'components/navbar';
import Socials from 'components/socials';

export default function January() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container">
                <Heading month={1} />
            </div>
            <Footer />
            <Socials />
        </div>
    );
}
