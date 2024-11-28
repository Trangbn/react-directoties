export default function TabButton({name, onSelect}){
    console.log('TabButton executing');
    return (
        <li><button onClick={onSelect}>{name}</button></li>
    );
}