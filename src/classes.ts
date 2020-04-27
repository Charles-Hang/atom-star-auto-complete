const classes = [
    'hidden',
    'block',
    'inline-block',
    'inline',
    'overflow-auto',
    'overflow-hidden',
    'overflow-visible',
    'overflow-scroll',
    'overflow-x-auto',
    'overflow-y-auto',
    'overflow-x-hidden',
    'overflow-y-hidden',
    'overflow-x-visible',
    'overflow-y-visible',
    'overflow-x-scroll',
    'overflow-y-scroll',
    'static',
    'absolute',
    'relative',
    'fixed',
    'sticky',
    'top-0',
    'right-0',
    'bottom-0',
    'left-0',
    'visible',
    'invisible',
    'z-0',
    'z-1',
    'z-2',
    'z-100',
    'z-200',
    'z-500',
    'z-1000',
    'flex',
    'inline-flex',
    'flex-row',
    'flex-row-reverse',
    'flex-col',
    'flex-col-reverse',
    'flex-no-wrap',
    'flex-wrap',
    'flex-wrap-reverse',
    'items-stretch',
    'items-start',
    'items-center',
    'items-end',
    'items-baseline',
    'content-stretch',
    'content-start',
    'content-center',
    'content-end',
    'content-between',
    'content-around',
    'self-auto',
    'self-start',
    'self-center',
    'self-end',
    'self-baseline',
    'self-stretch',
    'justify-start',
    'justify-center',
    'justify-end',
    'justify-between',
    'justify-around',
    'flex-initial',
    'flex-auto',
    'flex-none',
    'flex-grow',
    'flex-grow-0',
    'flex-shrink',
    'flex-shrink-0',
    'order-first',
    'order-last',
    'w-full',
    'w-14',
    'w-18',
    'w-20',
    'w-24',
    'h-14',
    'h-18',
    'h-20',
    'h-24',
    'h-32',
    'h-64',
    'h-full',
    'font-12',
    'font-13',
    'font-14',
    'font-16',
    'font-18',
    'font-20',
    'font-24',
    'font-normal',
    'font-bold',
    'leading-normal',
    'leading-24',
    'leading-32',
    'leading-64',
    'text-left',
    'text-center',
    'text-right',
    'align-baseline',
    'align-top',
    'align-middle',
    'align-bottom',
    'whitespace-normal',
    'whitespace-no-wrap',
    'whitespace-pre',
    'whitespace-pre-line',
    'whitespace-pre-wrap',
    'break-words',
    'break-all',
    'text-white',
    'text-black',
    'text-gray',
    'text-gray-light',
    'text-blue',
    'text-green',
    'text-red',
    'text-purple',
    'text-yellow',
    'bg-fixed',
    'bg-scroll',
    'bg-center',
    'bg-left',
    'bg-right',
    'bg-top',
    'bg-bottom',
    'bg-no-repeat',
    'bg-auto',
    'bg-cover',
    'bg-contain',
    'bg-transparent',
    'bg-white',
    'bg-gray',
    'bg-gray-light',
    'bg-blue',
    'bg-green',
    'bg-red',
    'bg-purple',
    'bg-yellow',
    'border',
    'border-0',
    'border-t',
    'border-r',
    'border-b',
    'border-l',
    'border-gray',
    'border-solid',
    'border-dashed',
    'border-dotted',
    'rounded-none',
    'rounded',
    'rounded-full',
    'cursor-auto',
    'cursor-default',
    'cursor-pointer',
    'cursor-move',
    'cursor-not-allow',
    'outline-none',
    'resize-none',
    'resize',
    'truncate',
    'word-title',
    'word-label',
    'word-desc',
    'tag-gray',
    'tag-yellow',
    'tag-green',
    'tag-red',
    'tag-blue',
    'tag-purple',
    'tag-gray-lg',
    'tag-yellow-lg',
    'tag-green-lg',
    'tag-red-lg',
    'tag-blue-lg',
    'tag-purple-lg',
    'header',
    'header-between',
    'divider-r',
    'divider-b',
    'divider-l',
    'tooltip-white',
    'mx-auto'
];

[0, 4, 6, 8, 10, 12, 16, 20, 24, 40].forEach(size => {
    ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl', 'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'].forEach(name => {
        classes.push(`${name}-${size}`);
    });
});

export default classes;
