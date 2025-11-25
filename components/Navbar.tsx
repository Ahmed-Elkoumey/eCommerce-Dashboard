'use client';

import styles from './Navbar.module.scss';

interface NavbarProps {
    onMenuClick?: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
    return (
        <header className={styles.navbar}>
            <button className={styles.menuBtn} onClick={onMenuClick} aria-label="Toggle menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            <div className={styles.title}>
                <h1>Dashboard</h1>
            </div>
            <div className={styles.actions}>
                <div className={styles.user}>
                    <span className={styles.avatar}>AD</span>
                    <span className={styles.name}>Admin User</span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
