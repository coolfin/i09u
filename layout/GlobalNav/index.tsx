import { Tabs } from '@geist-ui/core';
import classNames from 'classnames';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Container as BaseContainer } from '@/components/Container';
import { ForienToggle } from '@/components/Toggle';
import Image from 'next/image';
import { Logo } from './Logo';

export const GlobalNav = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>(router.pathname);

  const [iseng, setIsEng] = useState(false);

  useEffect(() => {
    setActiveTab(router.pathname);
    setIsEng(router.pathname.slice(0, 3) === '/en' ? true : false);
  }, [router.pathname]);

  return (
    <BaseContainer>
      <div
        className={classNames(
          'py-8',
          'flex',
          'justify-between',
          'items-center',
          'flex-wrap',
          'gap-y-3'
        )}
      >
        <div
          className={classNames(
            'flex',
            'justify-between',
            'items-center',
            'gap-x-3'
          )}
        >
          <Logo />
        </div>

        <Tabs
          value={
            iseng && router.pathname !== '/en' ? activeTab.slice(4) : activeTab
          }
          hideDivider
          className={classNames('max-w-full w-fit', 'flex')}
          onChange={(v) => {
            {
              iseng ? router.push('/eng' + v) : router.push(v);
            }
          }}
        >
          <Tabs.Item label={iseng ? 'About' : '회사소개'} value="/info" />
          <Tabs.Item
            label={iseng ? 'Cooperate' : '협력업체'}
            value="/together"
          />
          <Tabs.Item label={iseng ? 'Help' : '고객센터'} value="/help" />
          <Tabs.Item label={iseng ? 'People' : '사원'} value="/people" />
        </Tabs>

        <ForienToggle />
      </div>
    </BaseContainer>
  );
};

// // 80%크기 컨테이너
// const Container = styled(BaseContainer)({
//     maxWidth: '1008px',
// })
