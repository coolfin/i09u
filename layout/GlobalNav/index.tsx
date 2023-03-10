import { Tabs } from '@geist-ui/core'
import classNames from 'classnames';

import { useRouter } from 'next/router'
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Container as BaseContainer } from '@/components/Container';
import { ForienToggle } from '@/components/Toggle';

export const GlobalNav = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<string>(router.pathname);

    useEffect(() => {
        setActiveTab(router.pathname)
    }, [router.pathname])

    return (
        <BaseContainer>
            <div className={classNames(
                'py-8',
                'flex',
                'justify-between',
                'items-center',
                'flex-wrap',
                'gap-y-3',
            )}>
                <Link
                    href="/"
                    className={classNames(
                        'text-white',
                        'font-bold',
                        'text-xl',
                    )}>서흥공구</Link>

                <Tabs
                    value={activeTab}
                    hideDivider

                    className={classNames(
                        'max-w-full w-fit',
                        'flex',
                    )}
                    onChange={(v) => {
                        router.push(v)
                    }}>
                    <Tabs.Item label="회사소개" value='/info' />
                    <Tabs.Item label="협력업체" value='/together' />
                    <Tabs.Item label="고객센터" value='/help' />
                    <Tabs.Item label="사원" value='/people' />
                </Tabs>

                <ForienToggle />
            </div>
        </BaseContainer>
    )
}

// // 80%크기 컨테이너
// const Container = styled(BaseContainer)({
//     maxWidth: '1008px',
// })