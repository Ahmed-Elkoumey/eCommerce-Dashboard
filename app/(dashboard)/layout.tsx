'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import styles from './layout.module.scss';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className={styles.layout}>
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <div className={styles.mainContent}>
                <Navbar onMenuClick={toggleSidebar} />
                <main className={styles.pageContent}>
                    <div className="container">
                        {children}
                    </div>
                </main>
            </div>
            {isSidebarOpen && (
                <div className={styles.overlay} onClick={closeSidebar} />
            )}
        </div>
    );
}
