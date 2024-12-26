
export default function Login() {
    return (
        <main>
            <div className="bg">
                <div className="div1">
                    <div className="signIn">
                        <form action="" id="signIn-form" title="會員登入">
                            <input type="text" name="account-number" id="accountNumber" title="輸入帳號" placeholder="帳號" />
                            <input type="password" name="password" id="password" title="輸入密碼" placeholder="密碼" />
                            <a href="">忘記密碼？</a>

                            <button id="submit-btn" type="submit">登入</button>

                            <div className="rembr-me">
                                <input type="checkbox" name="rembr-me" id="rembr-me" title="記住我" />
                                <label htmlFor="rembr-me">記住我</label>
                            </div>
                        </form>
                    </div>
                    <div className="signUp">
                        <div className="no-menber">
                            <p>沒有<span>HAPPY WORK</span>會員？</p>
                        </div>
                        <div className="btn-div">
                            <button id="register-btn">
                                <a href="">點我註冊</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}