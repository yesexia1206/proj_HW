import { Link } from "react-router-dom";
import styles from "../assets/css/body.module.css";
import { useEffect } from "react";

export default function MemberItem() {

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
            <div className="member-item-page">
                <div className="member-item">
                    <div className="item">
                        <img src="../images/history-icon.svg" alt="" />
                        <Link to='/memberHistory'>租賃紀錄</Link>
                    </div>
                    <div className="item">
                        <img src="../images/person-icon.svg" alt="" />
                        <Link to='/memberItem'>個人資料</Link>
                    </div>
                </div>
                <div className="member-item-content">
                    <div className="revise-wrap">
                        <button className="revise-btn">
                            修改資料
                            <img src="../images/revise-icon.svg" alt="" />
                        </button>
                    </div>
                    <form action="" className="member-form" method="post">
                        <p>姓名</p>
                        <input type="text" id="member-name" name="member-name" required />

                        <div className="div-sex">
                            <p>性別</p>
                            <div>
                                <input type="radio" id="sex-female" name="sex" value="sex-female" />
                                <label htmlFor="sex-female">女士</label>
                                <input type="radio" id="sex-male" name="sex" value="sex-male" defaultChecked />
                                <label htmlFor="sex-male">男士</label>
                            </div>
                        </div>

                        <p>電話</p>
                        <input type="tel" id="tel" name="tel" />

                        <p>電子信箱</p>
                        <input type="email" id="email" name="email" required />

                        <p>生日</p>
                        <input type="date" id="date" name="date" required />

                        <p>帳號</p>
                        <input type="text" id="userid" name="userid" readOnly />

                        <p>密碼</p>
                        <input type="password" id="userpassword" name="userpassword" />
                        <p>密碼確認</p>
                        <input type="password" id="userpassword-chk" name="userpassword-chk" />

                        <div className="member-form-btn">
                            <input type="submit" id="submit-btn" value="送出" />
                            <input type="reset" id="reset-btn" value="清除" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}