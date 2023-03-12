

import { Container } from '@/components/Container'

import classNames from 'classnames'
import { Text } from '@geist-ui/core'
import Image from 'next/image'

//처음 라우팅 안됐을 때 보여줄 페이지
export default function Home() {
  return (
    <Container className={classNames(
      'flex',
      'items-center',
      'justify-between',
      'mt-40',

      'sm:flex-col',
      'md:flex-col',
      'lg:flex-row',
    )}>
      {/* 좌측 텍스트 우측 이미지 */}
      <div className={classNames(
        'flex',
        'flex-col',
        'justify-center',
      )}>
        {/* 텍스트 내부 컨테이너 */}
        <Text
          h1
          className={classNames(
            'font-bold',
          )}
        >Wellcome to Seoheung</Text>

        <Text
          span
          className={classNames(
            'text-gray-600',
            'font-light'
          )}
        >
          In the upcoming spring, start fresh with Seoheung 😄
        </Text>
      </div>
      {/* <div
        className={classNames(
          'w-1/3',
          'flex',
          'items-center',
          'justify-center',
          'bg-gray-100',
          'py-28',
          'rounded-full',
        )}> */}
      <Image
        className={classNames(
          'rounded-full',
          'py-12'
        )}
        src="/images/company.png"
        alt="company img"
        width={500}
        height={150}
      />
      {/* </div> */}

    </Container >
  )
}

