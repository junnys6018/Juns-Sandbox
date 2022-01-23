import { SocialLinks } from './socials';

export default function Footer() {
    return (
        <footer className="mt-auto text-center pb-4">
            <div className="xl:hidden flex flex-row justify-center gap-4">
                <SocialLinks />
            </div>
            <span className="font-medium text-xs text-neutral-700">© 2022 Designed &amp; Built by Jun Lim </span>
        </footer>
    );
}
