import { Container } from '@/components/Container';
import classNames from 'classnames';
import { useEffect, useMemo } from 'react';

import { people } from '@/data';
import { PeopleType } from '@/@types/entity';
import { Mail } from '@geist-ui/icons';
import Image from 'next/image';

export const Page = () => {
  const rawPeople = useMemo<PeopleType[]>(() => people, []);

  useEffect(() => {
    console.log(people);
  }, []);

  return (
    <Container>
      <div className={classNames('py-32')}>
        <div
          className={classNames(
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'lg:grid-cols-4',

            'gap-x-2',
            'gap-y-4',

            'max-sm:p-10',
          )}
        >
          {rawPeople.map((val, index) => (
            <div
              key={index}
              className={classNames(
                'px-4',
                //flex
                'flex',
                'flex-col',
                'justify-center',
                'items-center'
              )}
            >
              <div
                className={classNames(
                  'w-full',
                  'aspect-square',
                  'px-4',
                  'gap-y-2',

                  'flex',
                  'flex-col',
                  'justify-center',
                  'items-center'
                )}
              // style={{
              //   backgroundImage: `url(${val['path']})`,
              // }}
              >
                <div
                  className={classNames(
                    'w-full',
                    'border-box',
                    'p-4',

                    'flex',
                    'justify-center',
                    'items-center',
                  )}
                >
                  <div className={classNames(
                    'w-full', 
                    'aspect-square',
                    'rounded-full',

                    'border-8',
                    'border-white',
                    'border-double',
 
                    'bg-contain',
                    'bg-origin-content',
                    'bg-no-repeat',
                    'bg-center',
                    
                    'hover:cursor-pointer',
                    'hover:opacity-80',)}
                    
                    // onClick={() => {
                    //   alert('Go to send email.');
                    //   window.open(`mailto:${val['email']}`);
                    // }}
                    style={{
                      backgroundImage: `url('${val['url']}')`,
                    }}
                    />
                </div>
                <div
                  className={classNames(
                    'w-full',
                    'flex',
                    'flex-col',
                    'justify-center',
                    'items-center',

                    'font-bold',
                    'text-white',
                    'text-lg'
                  )}
                >
                  {val['eng_name']}{' '}
                  <span className={classNames('font-light', 'text-sm')}>
                    {val['job']}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Page;
