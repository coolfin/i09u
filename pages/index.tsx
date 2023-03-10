
import { Container } from '@/components/Container'

import classNames from 'classnames'
import { Text } from '@geist-ui/core'
//처음 라우팅 안됐을 때 보여줄 페이지
export default function Home() {
  return (
    <Container>
      <Text h1
        className={classNames(
          'font-extrabold',
          ''
          )}
      >안녕하세요, 서흥공구입니다</Text>
    </Container >
  )
}
