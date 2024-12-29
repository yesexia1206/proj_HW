import { useState, useEffect } from "react";
import MemberHistoryPagination from "../component/MemberHistoryPagination";

export default function MemberHistory() {

    // 定義一個 state 來儲存租賃紀錄資料
    const [historyData, setHistoryData] = useState([]);

    // 使用 useEffect 模擬從後端抓取資料
    useEffect(() => {
        const fetchData = () => {
            // 模擬資料
            const data = [
                {
                    date: "2024-12-18", // 日期
                    duration: "180天",  // 使用時間
                    plan: "私人辦公室", // 方案類型
                    location: "小綠洲", // 據點
                    amount: 180000,     // 金額
                    paymentStatus: "已付清", // 付款狀態
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "已付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "已付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "已付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "已付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "已付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "已付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "已付清",
                },
                // ...可以新增更多資料
            ];
            // 將資料更新到 state
            setHistoryData(data);
        };

        // 呼叫 fetchData 函式模擬資料抓取
        fetchData();
    }, []);

    return (
        <main>
            <div className="member-item-history">
                <div className="member-item">
                    <div className="item">
                        <img src="./images/history-icon.svg" alt="" />
                        <a href="#">租賃紀錄</a>
                    </div>
                    <div className="item">
                        <img src="./images/person-icon.svg" alt="" />
                        <a href="#">個人資料</a>
                    </div>
                </div>
                
                <div className="member-history-content">
                    <div className="history-list">
                        {/* 表頭 */}
                        <div className="history-list-item">
                            <p className="df-alic">
                                日期<img src="./images/arrow_drop_down_l.svg" alt="" />
                            </p>
                            <p>使用時間</p>
                            <p>方案類型</p>
                            <p>據點</p>
                            <p>金額</p>
                            <p>付款狀態</p>
                        </div>

                        {/* 動態渲染每筆租賃紀錄 */}
                        {historyData.map((item, index) => (
                            <div className="history-list-data" key={index}>
                                <p>{item.date}</p>
                                <p>{item.duration}</p>
                                <p>{item.plan}</p>
                                <p>{item.location}</p>
                                <p>{item.amount}</p>
                                <p className="pay">{item.paymentStatus}</p>
                            </div>
                        ))}

                        {/* 分頁控制 */}
                        {/* <div className="history-page-ctrl">
                            <a href="">
                                <img src="./images/chevron_left_l.svg" alt="" />
                            </a>
                            <a href="">1</a>
                            <a href="">2</a>
                            <a href="">3</a>
                            ‧ ‧ ‧
                            <a href="">
                                <img src="./images/chevron_right_l.svg" alt="" />
                            </a>
                        </div> */}
                        <MemberHistoryPagination />
                    </div>
                </div>
            </div>
        </main>
    )
}