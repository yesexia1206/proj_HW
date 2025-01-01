import { useEffect, useState } from "react";
import SignUpCompleted from "../component/SignUpCompleted";
import SignUpVerify from "../component/SignUpVerify";

export default function SignUp() {

    const [step, setStep] = useState(1);
    const nextStep = () => {
        setStep(step + 1);
    };

    const[formData,setFormData]=useState({
        name:'',sex:'',tel:'',email:'',date:'',userid:'',userpassword:'',userpasswordChk:'',agreeRules:false,
    });
    console.log(formData);

    const [isStyleVh100, setIsStyleVh100] = useState(false);

    useEffect(() => {
        //判斷.signup-completed存在
        if (document.querySelector(".signup-completed") || document.querySelector(".verify-form")) {
            setIsStyleVh100(true);
        }
    }, [step])

    return (
        <main>
            <div className="signUp-page"
                style={{ height: isStyleVh100 ? "100vh" : "auto" }}
            >
                <div className="signup-title">
                    <h3>Sign Up</h3>
                    <h2>會員註冊</h2>
                </div>
                <div className="signup-content">
                    <div className="flow-chart">
                        <div className={step===1?"processNow":"process"}>
                            <p>輸入資料</p>
                        </div>
                        <img src="../images/arrow_icon.svg" alt="" className="arrow-icon" />
                        <div className={step===2?"processNow":"process"}>
                            <p>驗證</p>
                        </div>
                        <img src="../images/arrow_icon.svg" alt="" className="arrow-icon" />
                        <div className={step===3?"processNow":"process"}>
                            <p>註冊成功</p>
                        </div>
                    </div>

                    {step === 1 &&
                        <form action="" className="member-form" method="post" 
                        onSubmit={(e)=>{
                            e.preventDefault();
                            nextStep();
                        }}>
                            <div className="div-name-sex">
                                <div className="div-name">
                                    <p><span className="required">必填</span>姓名</p>
                                    <input type="text" id="member-name" name="member-name" required 
                                    value={formData.name}
                                    onChange={(e)=>{
                                        setFormData({...formData,name:e.target.value})
                                    }}/>
                                </div>

                                <div className="div-sex">
                                    <p>性別</p>
                                    <div>
                                        <input type="radio" id="sex-female" name="sex" value="female"
                                        checked={formData.sex==="female"}
                                        onChange={(e)=>{
                                            setFormData({...formData,sex:e.target.value})
                                        }}/>
                                        <label htmlFor="sex-female">女士</label>
                                        <input type="radio" id="sex-male" name="sex" value="male" 
                                        checked={formData.sex==="male"}
                                        onChange={(e)=>{
                                            setFormData({...formData,sex:e.target.value})
                                        }}/>
                                        <label htmlFor="sex-male">男士</label>
                                    </div>
                                </div>
                            </div>

                            <p className="magn-l-b">電話</p>
                            <input type="tel" id="tel" name="tel"
                            value={formData.tel}
                            onChange={(e)=>{
                                setFormData({...formData,tel:e.target.value})
                            }}/>

                            <p><span className="required">必填</span>電子信箱</p>
                            <input type="email" id="email" name="email" required 
                            value={formData.email}
                            onChange={(e)=>{
                                setFormData({...formData,email:e.target.value})
                            }}/>

                            <p><span className="required">必填</span>生日</p>
                            <input type="date" id="date" name="date" required 
                            value={formData.date}
                            onChange={(e)=>{
                                setFormData({...formData,date:e.target.value})
                            }}/>

                            <p><span className="required">必填</span>帳號</p>
                            <input type="text" id="userid" name="userid" required 
                            value={formData.userid}
                            onChange={(e)=>{
                                setFormData({...formData,userid:e.target.value})
                            }}/>

                            <p><span className="required">必填</span>密碼</p>
                            <input type="password" id="userpassword" name="userpassword" required 
                            value={formData.userpassword}
                            onChange={(e)=>{
                                setFormData({...formData,userpassword:e.target.value})
                            }}/>
                            <p><span className="required">必填</span>密碼確認</p>
                            <input type="password" id="userpassword-chk" name="userpassword-chk" required 
                            value={formData.userpasswordChk}
                            onChange={(e)=>{
                                setFormData({...formData,userpasswordChk:e.target.value})
                            }}/>

                            <div className="div-chk-rule">
                                <input type="checkbox" name="chk-rule" id="chk-rule" required />
                                <label htmlFor="chk-rule">
                                    我已閱讀並同意
                                    <span> <a href="#">會員同意書</a> </span>
                                    及
                                    <span> <a href="#">隱私權政策</a> </span>
                                </label>
                            </div>

                            <input type="submit" id="submit-btn" value="送出註冊"/>
                        </form>
                    }
                    {step === 2 && <SignUpVerify onNext={nextStep}/>}
                    {step === 3 && <SignUpCompleted />}
                </div>
            </div>
        </main>
    )
}