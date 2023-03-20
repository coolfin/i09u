import { Container } from "@/components/Container"
import classNames from "classnames"
import { useMemo } from "react"

import { histories } from '@/data';
import { Logo } from "@/layout/GlobalNav/Logo";
import { Button } from "@geist-ui/core";
import { ArrowRight } from "@geist-ui/icons";
import Link from "next/link";

export const Page = () => {
  const rawHistory = useMemo(() => histories, []);
  return (

    <Container>
      <div className={classNames('bg-red-200', 'w-full', 'm-0')}>

      </div>

      <div className={classNames(
        'w-full',

        'flex',
        'flex-col',
        'justify-center',
        'items-center',

        'gap-y-20',
      )}>
        {/* 회사소개 */}
        <div className={classNames(
          'w-full',

          'py-4',
          'mt-20',

          'flex',
          'max-sm:flex-col',
          'justify-around',
          'items-center',


          'border-y',
          'border-gray-400',

          'max-sm:gap-y-4',
        )}>
          <div className={classNames(
            'w-1/3',
            'aspect-square',

            'rounded-full',
            'border-white',
            'border-8',
            'border-double',

            'bg-cover',
            'bg-no-repeat',
            'bg-center',

            'hover:opacity-90',
            'hover:cursor-pointer',


            'p-16',
            'my-16'
          )} style={{
            backgroundImage: `url('/images/parent.jpeg')`
          }} />
          <div className={classNames(
            'w-1/2',
            'max-sm:w-3/4',

            'flex',
            'flex-col',
            'max-sm:items-center',

            'gap-y-2',


            'text-gray-300',
            'text-sm',
          )}>
            <Logo />
            <span>서흥공구는 귀사의 발전이 당사의 발전이라는 모토로 작은 일에도 정성을 다하고 있습니다.</span>
            <span>공구여신이라는 브랜드로 의미있는 사업들을 하고 있으며, 취급품목은 아래와 같습니다.</span>
            <span><strong className={classNames('font-bold', '')}>절삭공구 금형공구 전동공구 측정공구 에어공구 용접자재 포장잡자재(랩, 비닐, 테이프, 포장 끈 등)과 케미칼종류, 볼트 배관 에어닛플 전기자재 연마제품
              수공구 보루 장갑 등</strong> 매우 많은 품목을 취급중인 종합공구입니다.</span>
            <span>서흥공구의 장점은 한 곳에서 모두 구매할 수 있을 정도로 다양한 품목을 보유하고 있다는 것 입니다. 여러분의 시간을 절약해 드리겠습니다.</span>
            <span>웃자, 먼저 웃자 라는 사훈을 기억하고 최선을 다하여 여러분의 발전에 기여하기 위해 노력하겠습니다.</span>
            <span className='font-extrabold'>감사합니다</span>
          </div>
        </div>
        {/* 연혁 */}
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
            'lg:grid-cols-4',

            'p-8',
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

                'text-center',
                'text-gray-300',

                { 'lg:border-l-4': index !== 0 },

              )}>
              <h2 className={classNames(
                'text-center',
                'text-white',
              )}>
                {val['year']}
              </h2>
              <span>
                {val['title']}
              </span>
            </div>
          ))}

        </div>

        {/*유튜브 */}
        <div className={classNames(
          'w-full',

          'flex',
          'justify-around',
          'items-center',

          'gap-x-8',

          'border-y',
          'border-gray-400',
          'py-20',

          'max-sm:flex-col',
          'max-sm:gap-y-10',
        )}>
          <div className={classNames(
            'w-fit',

            'flex',
            'flex-col',
            'justify-start',

            'gap-y-4',
          )}>

            <h2>Join Our Youtube</h2>
            <div>서흥공구의 일상을 함께해 보세요</div>
            <Link href='https://www.youtube.com/@TV-vh5ow' target="_blank">
              <Button icon={<ArrowRight />} width={1.5} iconRight>
                유튜브 바로가기
              </Button>
            </Link>
          </div>
          <div>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/20sk09BmWtc?start=9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
          </div>
        </div>

        <div className={classNames(
          'w-full',

          'flex',
          'justify-center',
          'items-center',

          'max-sm:gap-y-8',
        )}>
          <div className={classNames(
            'w-1/3',

            'flex',
            'flex-col',

            'justify-center',
            'items-center',

            'gap-y-2',
          )}>
          <span className={classNames('text-4xl', 'font-extrabold', 'max-sm:text-2xl')}>오시는 길</span>
          <span className={classNames('text-sm', 'text-gray-300', 'mb-4')}>경기 화성시 장안면 3.1만세로 457 1층 457</span>
          <span className={classNames('text-gray-200', 'font-light', 'text-sm')}>📞 031 ) 351 - 5509</span>
          <span className={classNames('text-gray-200', 'font-light', 'text-sm')}>📠 031 ) 351 - 1509</span>
        </div>

        <div className={classNames('aspect-square', 'w-1/2',
        'flex',
        'justify-center',
        'items-center',
        )}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.09822566783!2d126.85096671558297!3d37.10277925830762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b111457b080b5%3A0x801c64338cd4e887!2z7ISc7Z2l6rO16rWs!5e0!3m2!1sen!2sus!4v1678943882245!5m2!1sen!2sus" width="70%" height="70%" loading="lazy" />

        </div>

      </div>
    </div>

      {/* <div className={classNames('bg-red-200', 'w-full', 'h-100')}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.09822566783!2d126.85096671558297!3d37.10277925830762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b111457b080b5%3A0x801c64338cd4e887!2z7ISc7Z2l6rO16rWs!5e0!3m2!1sen!2sus!4v1678943882245!5m2!1sen!2sus" width="40%" height="100%"  loading="lazy" />
    </div> */}

    </Container >
  )
}

export default Page
