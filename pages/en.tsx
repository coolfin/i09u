
import { Container } from '@/components/Container'

import classNames from 'classnames'
import { Text } from '@geist-ui/core'
import Image from 'next/image'

//처음 라우팅 안됐을 때 보여줄 페이지
export default function Home() {
  return (
    <Container>
      <div className={classNames(
        'flex',
      )}>
        {/* 좌측 텍스트 우측 이미지 */}
        <div>
          {/* 텍스트 내부 컨테이너 */}
          <Text
            h1
            className={classNames(
              'font-bold',
              'mt-52',
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
      </div>
    </Container >
  )
}
