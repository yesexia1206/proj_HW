import styles from "../assets/css/body.module.css";
import { useEffect } from "react";

export default function SignUpVerify({ onNext }) {

    useEffect(() => {
            // 設置 body 的樣式
            document.body.classList.add(styles.bodycolor1);
    
            // 清理時移除樣式，防止影響其他組件
            return () => {
                document.body.classList.remove(styles.bodycolor1);
            };
        }, []);
        
    return (
        <form action="" method="post" className="verify-form">
            <p className="verify-p-1">請至您註冊輸入的e-mail查看驗證碼</p>
            <div id="div-verify-code">
                <input type="text" name="verify-1" id="verify-1" maxLength="5" size="5" />
            </div>
            <p className="verify-p-2">請在<span>175秒</span>內輸入驗證碼</p>
            <p id="reset-verify">重新發送驗證碼<span></span></p>
            <input type="submit" value="驗證" id="submit-btn-verify"
                onClick={onNext}
            />
        </form>
    )
}