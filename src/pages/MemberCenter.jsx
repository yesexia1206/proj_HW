import { Link } from "react-router-dom";
import "../assets/css/body.css";

export default function MemberCenter() {
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