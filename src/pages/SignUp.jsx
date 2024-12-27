
export default function SignUp() {
    return (
        <main>
            <div className="signUp-page">
                <div className="signup-title">
                    <h3>Sign Up</h3>
                    <h2>會員註冊</h2>
                </div>
                <div className="signup-content">
                    <div className="flow-chart">
                        <div className="process1">
                            <p>輸入資料</p>
                        </div>
                        <img src="./images/arrow_icon.svg" alt="" className="arrow-icon" />
                        <div className="process2">
                            <p>驗證</p>
                        </div>
                        <img src="./images/arrow_icon.svg" alt="" className="arrow-icon" />
                        <div className="process3">
                            <p>註冊成功</p>
                        </div>
                    </div>

                    <form action="" className="member-form" method="post">
                        <div className="div-name-sex">
                            <div className="div-name">
                                <p><span className="required">必填</span>姓名</p>
                                <input type="text" id="member-name" name="member-name" required />
                            </div>

                            <div className="div-sex">
                                <p>性別</p>
                                <div>
                                    <input type="radio" id="sex-female" name="sex" value="sex-female" />
                                    <label htmlFor="sex-female">女士</label>
                                    <input type="radio" id="sex-male" name="sex" value="sex-male" />
                                    <label htmlFor="sex-male">男士</label>
                                </div>
                            </div>
                        </div>

                        <p className="magn-l-b">電話</p>
                        <input type="tel" id="tel" name="tel" />

                        <p><span className="required">必填</span>電子信箱</p>
                        <input type="email" id="email" name="email" required />

                        <p><span className="required">必填</span>生日</p>
                        <input type="date" id="date" name="date" required />

                        <p><span className="required">必填</span>帳號</p>
                        <input type="text" id="userid" name="userid" required />

                        <p><span className="required">必填</span>密碼</p>
                        <input type="password" id="userpassword" name="userpassword" required />
                        <p><span className="required">必填</span>密碼確認</p>
                        <input type="password" id="userpassword-chk" name="userpassword-chk" required />

                        <div className="div-chk-rule">
                            <input type="checkbox" name="chk-rule" id="chk-rule" required />
                            <label htmlFor="chk-rule">
                                我已閱讀並同意
                                <span><a href="#">會員同意書</a></span>
                                及
                                <span><a href="#">隱私權政策</a></span>
                            </label>
                        </div>

                        <input type="submit" id="submit-btn" value="送出註冊" />
                    </form>
                </div>
            </div>
        </main>
    )
}