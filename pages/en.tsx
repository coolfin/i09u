
import { Container } from '@/components/Container'

import classNames from 'classnames'
import { Text } from '@geist-ui/core'
import { ForienToggle } from '@/components/Toggle'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

//처음 라우팅 안됐을 때 보여줄 페이지
export default function Home() {
    return (
        <Container
            className={classNames(
                'w-full', 'h-full',
            )}
        >

            <Text
                className={classNames('font-bold')}
            >Hello, Welcome To SeoHeung.</Text>

            <ForienToggle />
        </Container>
    )
}