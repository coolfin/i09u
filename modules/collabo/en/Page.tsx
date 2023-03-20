import { Container } from '@/components/Container';
import classNames from 'classnames';
import { useMemo } from 'react';

import { factories } from '@/data';
import { FactoryType } from '@/@types/entity'
export const Page = () => {
  const rawFactory = useMemo<FactoryType[]>(() => factories, []);
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
            'gap-y-8',


            'max-sm:p-10',
          )}
        >
          {rawFactory.map((val, index) => (
            <div
              key={index}
              className={classNames(
                'px-4',
                //flex
                'flex',
                'flex-col',
                'justify-center',
                'items-center',

                'hover:cursor-pointer',
              )}
              onClick={() => {
                { val['url'] ? window.open(val['url'], '_blank') : alert('No link is connected.') }
              }}
            >
              <div
                className={classNames(
                  'w-full',
                  'aspect-square',

                  'bg-contain',
                  'bg-origin-content',
                  'bg-no-repeat',
                  'bg-center',

                  //ANIM
                  'border-box',
                  'p-14',

                  'hover:transform',
                  'hover:scale-110',
                  'hover:opacity-80',
                  'transition-all',
                  'duration-300',
                  'rounded-full',

                  'bg-gray-200',
                )}
                style={{
                  backgroundImage: `url(${val['path']})`,
                }}
              />

              <div
                className={classNames(
                  'w-full',

                  'text-center',

                  'text-white',
                  'text-sm',
                  'py-4'
                )}
              >
                {val['eng_name']}
              </div>
            </div>
          ))}

        </div>
      </div>
    </Container>
  );
};

export default Page;
