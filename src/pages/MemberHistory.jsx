import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MemberHistoryPagination from "../component/MemberHistoryPagination";

export default function MemberHistory() {

    // 定義 state 來儲存租賃紀錄資料與當前頁數
    const [historyData, setHistoryData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1); // 當前頁數
    const itemsPerPage = 8; // 每頁顯示的資料數量

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
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
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
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
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
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
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
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                {
                    date: "2024-12-18",
                    duration: "180天",
                    plan: "私人辦公室",
                    location: "小綠洲",
                    amount: 180000,
                    paymentStatus: "未付清",
                },
                // ...可以新增更多資料
            ];
            // 將資料更新到 state
            setHistoryData(data);
        };

        // 呼叫 fetchData 函式模擬資料抓取
        fetchData();
    }, []);

    // 計算當前頁顯示的資料範圍
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = historyData.slice(startIndex, endIndex);

    return (
        <main>
            <div className="member-item-history">
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
                        {currentData.map((item, index) => (
                            <div className="history-list-data" key={index}>
                                <p>{item.date}</p>
                                <p>{item.duration}</p>
                                <p>{item.plan}</p>
                                <p>{item.location}</p>
                                <p>{item.amount}</p>
                                <p className={item.paymentStatus === '已付清' ? "pay" : "nopay"}>{item.paymentStatus}</p>
                            </div>
                        ))}

                        {/* 分頁控制 */}
                        <MemberHistoryPagination
                            currentPage={currentPage}
                            totalPage={Math.ceil(historyData.length / itemsPerPage)}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}