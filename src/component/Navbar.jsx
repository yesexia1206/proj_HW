import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header id="topbar">
            <h1 className="logo">
                <a href="index.html">
                    <img src="./images/logo.svg" alt="HappyWork快樂工作共享辦公室" title="HappyWork快樂工作共享辦公室" />
                    快樂工作共享辦公室
                </a>
            </h1>
            <nav className="topbar-nav">
                <ul className="menu">
                    <li><Link to=''>服務據點</Link></li>
                    <li><Link to=''>共享方案</Link></li>
                    <li><Link to=''>活動消息</Link></li>
                    <li><Link to=''>關於我們</Link></li>
                    <li><Link to='/memberCenter'>會員中心</Link></li>
                </ul>
            </nav>
        </header>
    )
}