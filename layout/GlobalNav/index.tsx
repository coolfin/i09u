import { Tabs } from '@geist-ui/core'
import classNames from 'classnames';

import { useRouter } from 'next/router'
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Container as BaseContainer } from '@/components/Container';
import { ForienToggle } from '@/components/Toggle';
import Image from 'next/image';

export const GlobalNav = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<string>(router.pathname);
    const [iseng, setIsEng] = useState('/');

    useEffect(() => {
        setActiveTab(router.pathname)

        setIsEng(router.pathname==='/en' ? '/en' : '/')
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
                <div className={classNames(
                    'flex',
                    'justify-between',
                    'items-center',
                    'gap-x-3'
                )}>
                    <Link
                        href={iseng}
                        className={classNames(
                            'text-white',
                            'font-bold',
                            'text-xl',
                            'flex',
                        )}>
                        <Image src='/images/logo.png' width={50} height={50} alt={'로고'}/>

                        {router.pathname === '/en' ? 'Seoheung' : '서흥공구'}
                    </Link>
                </div>

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
                    <Tabs.Item label={router.pathname === '/en' ? 'About' : "회사소개"} value='/info' />
                    <Tabs.Item label={router.pathname === '/en' ? 'Cooperate' : "협력업체"} value='/together' />
                    <Tabs.Item label={router.pathname === '/en' ? 'Help' : "고객센터"} value='/help' />
                    <Tabs.Item label={router.pathname === '/en' ? 'People' : "사원"} value='/people' />
                </Tabs>

                {(router.pathname === '/en' || router.pathname === '/') && <ForienToggle />}
            </div>

        </BaseContainer>
    )
}

// // 80%크기 컨테이너
// const Container = styled(BaseContainer)({
//     maxWidth: '1008px',
// })