import styles from "../assets/css/body.module.css";
import { useEffect, useState } from "react";

export default function SignUpVerify({ onNext }) {

    //用於儲存驗證碼的本地狀態 captcha驗證碼
    const [captcha, setCaptcha] = useState('');
    //倒數計時器狀態
    const [timeLeft, setTimeLeft] = useState(180);

    useEffect(() => {
        // 設置 body 的樣式
        document.body.classList.add(styles.bodycolor1);

        //倒數計時器邏輯
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        // 清理時移除樣式，防止影響其他組件
        return () => {
            document.body.classList.remove(styles.bodycolor1);

            //避免重複計時
            clearInterval(timer);
        };
    }, []);

    //處理驗證碼輸入
    const InputChange = (e) => {
        setCaptcha(e.target.value);
    };

    //提交驗證表單處理
    const Submit = (e) => {
        e.preventDefault(); //防止頁面刷新

        // if (captcha.trim() === '') {
        //     alert('請輸入驗證碼');
        // }

        //驗證(預設驗證碼12345)
        if (captcha === '12345') {
            onNext();
        }
        else if(captcha.trim() === '') {
            alert('請輸入驗證碼');
            setCaptcha('');
        }
        else {
            alert('驗證碼錯誤，請重新輸入');
            setCaptcha('');
        }
    };

    return (
        <form action="" method="post" className="verify-form"
            onSubmit={Submit}
        >
            <p className="verify-p-1">請至您註冊輸入的e-mail查看驗證碼</p>
            <div id="div-verify-code">
                <input type="text" name="captcha" id="captcha" maxLength="5" size="5"
                    value={captcha}
                    onChange={InputChange}
                />
            </div>
            <p className="verify-p-2">請在<span>{timeLeft}秒</span>內輸入驗證碼</p>
            <p id="reset-verify" onClick={() => {
                setTimeLeft(180); //重設倒數
                alert('驗證碼已重新發送');
            }}>重新發送驗證碼<span></span></p>
            <input type="submit" value="驗證" id="submit-btn-verify" />
        </form>
    )
}