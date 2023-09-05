import Image from 'next/image';


export default function Header() {
    return (
        <header className="header-container">
            <div className="header-component">
                <Image src="/image/sushivid_logo.png" alt="sushivid_logo" width="126" height="48"/>
                <div>
                    <input type="text" name="search"/>
                </div>
            </div>
        </header>
    )
}