    // src/components/AdminLayout.jsx - YOUR EXACT LAYOUT
    'use client';

    import { Layout } from 'antd';
    import { useRouter } from 'next/router';
    import { useEffect, useState } from 'react';
    import dynamic from 'next/dynamic';

    const HeaderComponent = dynamic(() => import('@/components/Header'), { ssr: false });
    const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });

    const { Content } = Layout;

    export default function AdminLayout({ children }) {
        const [collapsed, setCollapsed] = useState(false);

        return (
            <div className="fixed inset-0 flex bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 overflow-hidden">
                <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
                <div className={`flex-1 flex flex-col transition-all duration-300`}>
                    <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
                    <main className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-600/50 scrollbar-track-slate-900/50 pt-4">
                        <div>{children}</div>
                    </main>
                </div>
            </div>
        );
    }
