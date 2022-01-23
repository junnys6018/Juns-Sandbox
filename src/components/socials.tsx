import { Fragment } from 'react';
import { FaGlobe, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export function SocialLinks() {
    return (
        <Fragment>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/junnys6018/Juns-Sandbox"
                className="p-2 rounded-full hover:bg-pink-500 hover:text-neutral-50 transition"
            >
                <FiGithub />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jun-lim-131810180/"
                className="p-2 rounded-full hover:bg-pink-500 hover:text-neutral-50 transition"
            >
                <FaLinkedinIn />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://junnys6018.github.io/"
                className="p-2 rounded-full hover:bg-pink-500 hover:text-neutral-50 transition"
            >
                <FaGlobe />
            </a>
        </Fragment>
    );
}

export default function Socials() {
    return (
        <div className="fixed bottom-4 left-4 hidden xl:flex flex-col items-center justify-center gap-2">
            <SocialLinks />
        </div>
    );
}
