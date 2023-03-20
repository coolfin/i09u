import { Container } from '@/components/Container';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useMemo } from 'react';

import { factories } from '@/data';
import { FactoryType } from '@/@types/entity';
import { useRouter } from 'next/router';

export const Page = () => {
  const router = useRouter();
  const rawFactory = useMemo<FactoryType[]>(() => factories, []);

  useEffect(() => {
    console.log(rawFactory[0]['path']);
  }, []);

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
                'border',
                'border-gray-800',
                'rounded-md',
                'bg-gray-300',

                'px-4',
                //flex
                'flex',
                'flex-col',
                'justify-center',
                'items-center',

                'hover:cursor-pointer',

                'text-gray-800',
              )}
              onClick={() => {
                {
                  val['url']
                    ? window.open(val['url'], '_blank')
                    : alert('No link is connected.');
                }
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
                  'duration-300'
                )}
                style={{
                  backgroundImage: `url(${val['path']})`,
                }}
              />

              <div
                className={classNames(
                  'w-full',
                  'border-t',
                  'border-gray-800',

                  'text-center',
                  'text-sm',
                  'py-4'
                )}
              >
                {val['name']}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Page;
