import logo from '../assets/logo.jpg';

export function Header() {
    return (
        <header id="main-header">
            <title>React food</title>
            <div id="title">
                <img src={logo} alt="Logo of website"/>
                <h1>React food</h1>
            </div>
            <div id="cart">
                <h2 className="text-button">Cart(3)</h2>
            </div>
        </header>
    );
}