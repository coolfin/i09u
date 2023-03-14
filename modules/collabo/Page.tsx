import { Container } from '@/components/Container';
import classNames from 'classnames';
import Image from 'next/image';

export const Page = () => {
  return (
    <Container>
      <div className={classNames('p-10')}>
        <div
          className={classNames(
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'lg:grid-cols-4',

            'gap-x-4',
            'gap-y-8'
          )}
        >
          <div
            className={classNames(
              'border',
              'border-gray-400',
              'rounded-md',

              'p-4',
              //flex
              'flex',
              'flex-col',
              'justify-center',
              'items-center',

              'hover:cursor-pointer'
            )}
            onClick={() => {
              window.open('https://www.bosch.com/', '_blank');
            }}
          >
            <Image
              className={classNames(
                'w-1/2',
                'bg-cover',
                'm-10',
                'hover:transform',
                'hover:scale-110',
                'transition-all',
                'duration-300'
              )}
              src={'/images/company_logo/bosch.png'}
              alt={'bosch'}
              width={100}
              height={100}
            />
            <div
              className={classNames(
                'w-full',
                'border-t',

                'text-center',
                'text-sm',
                'font-light',
                'py-4'
              )}
            >
              BOSCH (보쉬)
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
