import { Link } from "react-router-dom";
import styles from "../assets/css/body.module.css";
import { useEffect } from "react";

export default function SignUpCompleted() {

    useEffect(() => {
            // 設置 body 的樣式
            document.body.classList.add(styles.bodycolor1);
    
            // 清理時移除樣式，防止影響其他組件
            return () => {
                document.body.classList.remove(styles.bodycolor1);
            };
        }, []);
        
    return (
        <div className="signup-completed">
            <h2>會員註冊完成</h2>
            <p>歡迎您成為HAPPY WORK的會員
                <br/>
                    請盡情享受我們所提供的服務與設施：)！
            </p>
            <Link  to='/'><button id="btn-to-loginPage">立即登入</button></Link>
        </div>
    )
}