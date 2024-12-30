import { useEffect } from "react";
import styles from "../assets/css/body.module.css";

export default function MemberHistoryPagination({ currentPage, totalPage, onPageChange }) {
    useEffect(() => {
        // 設置 body 的樣式
        document.body.classList.add(styles.bodycolor1);

        // 清理時移除樣式，防止影響其他組件
        return () => {
            document.body.classList.remove(styles.bodycolor1);
        };
    }, []);

    // 產生分頁按鈕的函式
    const createPageButton = (pageNumber) => {
        return (
            <a
                key={pageNumber}
                className={currentPage === pageNumber ? "now" : ""}
                href="#"
                onClick={(e) => {
                    e.preventDefault(); // 防止預設行為
                    onPageChange(pageNumber); // 更新當前頁數
                }}
            >
                {pageNumber}
            </a>
        );
    };

    // 分頁邏輯處理
    const generatePagination = () => {
        let startPage = 1;
        let endPage = totalPage;
        let leftElement = null;
        let rightElement = null;
        let centerElements = [];

        // 設定分頁範圍
        if (totalPage > 5) {
            if (currentPage <= 3) {
                // 當前頁在前三頁範圍
                endPage = Math.min(4, totalPage);
                rightElement = (
                    <>
                        <span>...</span>
                        {createPageButton(totalPage)}
                    </>
                );
            } else if (currentPage >= totalPage - 2) {
                // 當前頁在最後三頁範圍
                startPage = Math.max(totalPage - 3, 1);
                leftElement = (
                    <>
                        {createPageButton(1)}
                        <span>...</span>
                    </>
                );
            } else {
                // 當前頁在中間區域
                startPage = currentPage - 2;
                endPage = currentPage + 2;
                leftElement = (
                    <>
                        {createPageButton(1)}
                        <span>...</span>
                    </>
                );
                rightElement = (
                    <>
                        <span>...</span>
                        {createPageButton(totalPage)}
                    </>
                );
            }
        }

        // 生成中間的頁碼
        for (let i = startPage; i <= endPage; i++) {
            centerElements.push(createPageButton(i));
        }

        return (
            <div className="page_number">
                {leftElement}
                {centerElements}
                {rightElement}
            </div>
        );
    };

    return (
        <div className="history-page-ctrl">
            {/* 上一頁按鈕 */}
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    // 上一頁
                    if (currentPage > 1) onPageChange(currentPage - 1);
                }}
                className={currentPage === 1 ? "disabled" : ""}
            >
                <img src="./images/chevron_left_l.svg" alt="上一頁" />
            </a>

            {/* 分頁按鈕 */}
            {generatePagination()}

            {/* 下一頁按鈕 */}
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    // 下一頁
                    if (currentPage < totalPage) onPageChange(currentPage + 1);
                }}
                className={currentPage === totalPage ? "disabled" : ""}
            >
                <img src="./images/chevron_right_l.svg" alt="下一頁" />
            </a>
        </div>
    );
}

