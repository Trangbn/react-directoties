export default function Button({children, textOnly, className, ...prop}) {
    let cssClass = textOnly ? 'text-button' : 'button';
    cssClass += ' ' + className;
    return <button className={cssClass}
        {...prop}>
        {children}
    </button>
}