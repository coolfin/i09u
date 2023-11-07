import { Toggle } from '@geist-ui/core';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export const ForienToggle = () => {
  const router = useRouter();
  return (
    <label
      className={classNames(
        'max-w-full w-fit',
        'flex',
        'items-center',
        'font-extralight'
      )}
    >
      <div
        className={classNames(
          { 'opacity-40': router.pathname.slice(0, 4) === '/eng' },
          'mx-3'
        )}
      >
        kr
      </div>
      <Toggle
        type="secondary"
        initialChecked={router.pathname.slice(0, 4) === '/eng' ? true : false}
        onChange={(e) => {
          e.preventDefault();
          {
            e.target.checked
              ? router.push('/eng' + router.pathname)
              : router.push(
                  router.pathname.slice(4) ? router.pathname.slice(4) : '/'
                );
          }
        }}
      />
      <div
        className={classNames(
          { 'opacity-40': router.pathname.slice(0, 4) !== '/eng' },
          'mx-3'
        )}
      >
        en
      </div>
    </label>
  );
};
