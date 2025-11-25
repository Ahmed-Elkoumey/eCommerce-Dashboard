'use client';

import Link from 'next/link';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h2>ShopDash</h2>
                </div>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/" className={styles.link} onClick={onClose}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" /></svg>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/inventory" className={styles.link} onClick={onClose}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
                            Inventory
                        </Link>
                    </li>
                    <li>
                        <Link href="/transactions" className={styles.link} onClick={onClose}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3V3z" /><path d="M3 9h18" /></svg>
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link href="/customers" className={styles.link} onClick={onClose}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-3-3.87" /><path d="M4 21v-2a4 4 0 0 1 3-3.87" /><circle cx="12" cy="7" r="4" /></svg>
                            Customers
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
