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

            'gap-x-4',
            'gap-y-8'
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
                  'justify-between',
                  'items-center'
                )}
                // style={{
                //   backgroundImage: `url(${val['path']})`,
                // }}
              >
                <div
                  className={classNames(
                    'w-full',
                    'aspect-square',

                    'border',
                    'rounded-md',

                    'flex',
                    'justify-center',
                    'items-end',
                    'p-2'
                  )}
                  style={{
                    backgroundImage: `url(${val['url']})`,
                  }}
                >
                  <div
                    className={classNames(
                      'w-10',
                      'p-2',
                      'border-box',
                      'border',

                      'rounded-md',
                      'bg-white',

                      'aspect-square',

                      'mr-2',

                      'bg-contain',
                      'bg-origin-content',
                      'bg-no-repeat',
                      'bg-center',

                      'flex',
                      'items-end',

                      'hover:cursor-pointer'
                    )}
                    style={{
                      backgroundImage: `url('/images/icon/mail-48.png')`,
                    }}
                    onClick={() => {
                      alert('메일 보내기로 이동합니다.');
                      window.open(`mailto:${val['email']}`);
                    }}
                  />
                  <div
                    className={classNames(
                      'w-10',
                      'p-2',
                      'border-box',
                      'border',

                      'rounded-md',
                      'bg-white',

                      'aspect-square',

                      'bg-contain',
                      'bg-origin-content',
                      'bg-no-repeat',
                      'bg-center',

                      'flex',
                      'items-end',

                      'hover:cursor-pointer'
                    )}
                    style={{
                      backgroundImage: `url('/images/icon/call-50.png')`,
                    }}
                    onClick={() => {
                      alert('전화 걸기로 이동합니다.');
                      window.open(`tel:${val['phone']}`);
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
