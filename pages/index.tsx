import { Container } from '@/components/Container';

import classNames from 'classnames';

import { Button, Text } from '@geist-ui/core';
import Image from 'next/image';
import { ArrowRight } from '@geist-ui/icons';
import Link from 'next/link';
import styled from '@emotion/styled';

//처음 라우팅 안됐을 때 보여줄 페이지
export default function Home() {
  //넥스트 라우터

  return (
    <BaseContainer
      className={classNames(
        'flex',
        'items-center',
        'justify-between',

        'max-sm:flex-col', //640px 이하
        'md:flex-col',
        'lg:flex-row',

        'mt-32'
      )}
    >
      {/* 좌측 텍스트 우측 이미지 */}
      <div
        className={classNames(
          'flex',
          'flex-col',
          'justify-center',
          'font-normal',

          'max-sm:gap-y-2',
          'max-sm:mb-5',
          'max-sm:items-center',
        )}
      >
        <span className={classNames('font-bold', 'text-sm', 'text-blue-300')}>
          우리집 필수품 공구의 모든 것
        </span>
        {/* 텍스트 내부 컨테이너 */}
        <Text h1 className={classNames('font-bold' , 'max-sm:text-3xl')}>
          안녕하세요, 서흥공구입니다
        </Text>

        <Text span className={classNames('text-gray-500')}>
          다가오는 봄, 서흥공구 제품과 함께 산뜻하게 시작해 보세요 😄
        </Text>

        <div className={classNames('mt-4')}>
          <Link href={'https://i09u.com/product/main.do'} target="_blank">
            <Button icon={<ArrowRight />} width={1.5} iconRight>
              쇼핑몰 바로가기
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={classNames(
          'max-w-full w-fit',
          'p-24',
          'box-border',
          //image css
          'bg-[url("/images/back.png")]',
          'bg-center',
          'bg-contain',
          'bg-no-repeat'
        )}
      >
        <Image
          className={classNames(
            'rounded-full', 
            'z-10',
            'shadow-2xl',
            'stroke-blue-500',
            )}
          src="/images/company.png"
          alt="company img"
          width={400}
          height={10}
        />
      </div>
    </BaseContainer>
  );
}

const BaseContainer = styled(Container)``;
