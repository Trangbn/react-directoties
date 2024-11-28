export default function TabButton({name, onSelect, isSelected}){
    console.log('TabButton executing');
    return (
        <li><button className={isSelected ? 'active': undefined} onClick={onSelect}>{name}</button></li>
    );
}