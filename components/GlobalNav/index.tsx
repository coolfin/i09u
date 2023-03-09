import { Tabs, Text } from '@geist-ui/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export const GlobalNav = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<string>(router.pathname);

    useEffect(() => {
        setActiveTab(router.pathname)
    }, [router.pathname])

    return (
        <>

            <Tabs 
            value={activeTab}
            onChange={(v) => {
                router.push(v)
            }}>
                <Tabs.Item label="회사소개" value='/info' />
                <Tabs.Item label="협력업체" value='/together' />
                <Tabs.Item label="고객센터" value='/help' />
                <Tabs.Item label="사원" value='/people' />
            </Tabs>
        </>
    )
}