export default function TabButton({name, onSelect, isSelected, ...props}){
    console.log('TabButton executing');
    return (
        <li><button className={isSelected ? 'active': undefined} {...props}>{name}</button></li>
    );
}
