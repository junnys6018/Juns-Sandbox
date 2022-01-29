import classNames from 'classnames';
import MarkdownIt from 'markdown-it';
import mk from 'markdown-it-katex';
import { useEffect, useState } from 'react';

const md = MarkdownIt();
md.use(mk);

export function Markdown(props: { markdown: string; className?: string }) {
    return (
        <article
            className={classNames('prose', props.className)}
            dangerouslySetInnerHTML={{ __html: md.render(props.markdown) }}
        ></article>
    );
}

export function AsyncMarkdown(props: { src: string; className?: string }) {
    const [html, setHtml] = useState('');

    useEffect(() => {
        fetch(props.src)
            .then(response => response.text())
            .then(text => setHtml(md.render(text)));
    }, [props.src]);

    if (html === '') {
        return null;
    }

    return (
        <article className={classNames('prose', props.className)} dangerouslySetInnerHTML={{ __html: html }}></article>
    );
}

export default md;
