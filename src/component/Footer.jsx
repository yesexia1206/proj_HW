
export default function Footer() {
    return (
        <footer>
            <h1 className="official-logo">
                <a href="index.html">
                    <img src="./images/HW-LOGO.svg" alt="" />
                </a>
            </h1>

            <div className="official-social">
                <a href="#">
                    <img src="./images/fb-icon.svg" alt="HappyWork-FB" title="HappyWork-FB" />
                </a>
                <a href="#">
                    <img src="./images/ig-icon.svg" alt="HappyWork-IG" title="HappyWork-IG" />
                </a>
            </div>

            <nav className="map">
                <ul className="menu">
                    <li><a href="">共享方案</a></li>
                    <li><a href="">預約參觀</a></li>
                    <li><a href="">會員中心</a></li>
                    <li><a href="">關於我們</a></li>
                    <li><a href="">服務據點</a></li>
                    <li><a href="">隱私政策</a></li>
                </ul>
            </nav>

            <small>Copyright © 2024 HAPPY WORK. All Rights Reserved</small>
        </footer>
    )
}