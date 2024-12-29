import { Link } from "react-router-dom";
import styles from "../assets/css/body.module.css";
import { useEffect } from "react";

export default function MemberCenter() {

    useEffect(() => {
        // 設置 body 的樣式
        document.body.classList.add(styles.bodycolor1);

        // 清理時移除樣式，防止影響其他組件
        return () => {
            document.body.classList.remove(styles.bodycolor1);
        };
    }, []);

    return (
        <main>
            <div className="member-center-page">
                <div className="member-center-wrap">
                    <div className="memter-center-title">
                        <h2>會員中心</h2>
                    </div>

                    <div className="memter-center-content">
                        <div className="member-wrap">
                            <h3>我的帳戶</h3>
                            <img src="./images/member-img.svg" alt="" />
                            <div className="member-data">
                                <p>姓名：工作者</p>
                                <p>連絡電話：0987654321</p>
                                <p>電子信箱：0987654321@email.com</p>
                            </div>
                        </div>

                        <div className="member-item">
                            <div className="item">
                                <img src="./images/history-icon.svg" alt="" />
                                <Link to='/memberHistory'>租賃紀錄</Link>
                            </div>
                            <div className="item">
                                <img src="./images/person-icon.svg" alt="" />
                                <Link to='/memberItem'>個人資料</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}