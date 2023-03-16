import { Container } from "@/components/Container"
import styled from "@emotion/styled"
import classNames from "classnames"
import { useMemo } from "react"

import { histories } from '@/data';

export const Page = () => {
  const rawHistory = useMemo(() => histories, []);
  return (

    <BaseContainer>
      <div className={classNames('bg-red-200', 'w-full', 'm-0')}>

      </div>

      <div className={classNames(
        'w-full',

        'flex',
        'justify-center',
        'items-center',
      )}>
        <div className={
          classNames(
            'w-full',

            //flex
            'flex',
            'justify-between',
            'items-center',

            'grid',
            'max-sm:grid-cols-1',
            'md:grid-cols-3',
            'lg:grid-cols-5',
          )}
          style={{
            maxWidth: '1248px'
          }}>
          {rawHistory.map((val, index) => (
            <div
              key={index}
              className={classNames(
                'w-full',
                'h-full',
                'aspect-square',

                'box-border',
                'p-4',

                'flex',
                'flex-col',
                'justify-center',
                'items-center',

                {'border-l-4': index !== 0},

              )}>
              <h2 className={classNames(
                'text-center',
              )}>
                {val['year']}
              </h2>
              <span>
                {val['title']}
              </span>
            </div>
          ))}

        </div>


      </div>

      {/* <div className={classNames('bg-red-200', 'w-full', 'h-100')}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.09822566783!2d126.85096671558297!3d37.10277925830762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b111457b080b5%3A0x801c64338cd4e887!2z7ISc7Z2l6rO16rWs!5e0!3m2!1sen!2sus!4v1678943882245!5m2!1sen!2sus" width="40%" height="100%"  loading="lazy" />
    </div> */}

    </BaseContainer>
  )
}

export default Page

const BaseContainer = styled(Container)`
max-width: 100%;
`