import { Container } from '@/components/Container';
import classNames from 'classnames';
import { useEffect, useMemo } from 'react';

import { people } from '@/data';
import { PeopleType } from '@/@types/entity'

export const Page = () => {
  const rawPeople = useMemo<PeopleType[]>(() => people, []);

  useEffect(() => {
    console.log(people)
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
            'gap-y-8',


            'bg-red-100',
          )}
        >
          {rawPeople.map((val, index) => (
            <div
              key={index}
              className={classNames(
                'bg-slate-400',
                'px-4',
                //flex
                'flex',
                'flex-col',
                'justify-center',
                'items-center',

              )}
            >
              <div
                className={classNames(
                  'w-full',
                  'aspect-square',
                  //ANIM
                  'px-4',

                  'gap-y-2',

                  'flex',
                  'flex-col',
                  'justify-between',
                  'items-center',
                )}
              // style={{
              //   backgroundImage: `url(${val['path']})`,
              // }}
              >

                <div className={classNames(
                  'w-full',
                  'aspect-square',
                  'bg-red-400',
                )}>이미지</div>
                <div className={classNames(
                  'w-full',
                  'flex',
                  'flex-col',
                  'justify-center',
                  'items-center',

                  'font-bold',
                  'text-cyan-800',
                  'text-lg',
                )}>{val['eng_name']} <span className={classNames('font-light', 'text-sm')}>{val['job']}</span></div>
              </div>
              <div
                className={classNames( //우측에 아이콘 (메일, 전화) 
                  'w-full',

                  'text-center',
                  'text-sm',
                  'px-4',

                  'flex',
                  'justifty-between',
                  'items-center',
                )}
              >
                <div>

                {val['eng_name']}
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
