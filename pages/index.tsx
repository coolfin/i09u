
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
          >안녕하세요, 서흥공구입니다</Text>

          <Text
            span
            className={classNames(
              'text-gray-600',
              'font-light'
            )}
          >
            다가오는 봄, 서흥공구 제품과 함께 산뜻하게 시작해 보세요 😄
          </Text>
        </div>
      </div>
    </Container >
  )
}
