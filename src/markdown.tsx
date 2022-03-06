import classNames from 'classnames';
import MarkdownIt from 'markdown-it';
import mk from 'markdown-it-katex';
import { useEffect, useState } from 'react';

const md = MarkdownIt({ html: true });
md.use(mk);

export function Markdown(props: { markdown: string; className?: string }) {
    return (
        <article
            className={classNames('prose prose-lg prose-headings:text-pink-500', props.className)}
            dangerouslySetInnerHTML={{ __html: md.render(props.markdown) }}
        ></article>
    );
}

export function AsyncMarkdown(props: { src: string; className?: string }) {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(props.src)
            .then(response => response.text())
            .then(text => setMarkdown(text));
    }, [props.src]);

    if (markdown === '') {
        return null;
    }

    return <Markdown markdown={markdown} className={props.className} />;
}

export default md;
