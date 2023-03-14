import { Container } from '@/components/Container';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export const GlobalFooter = () => {
  const router = useRouter();
  return (
    <Container
      className={classNames(
        'flex',
        'flex-col',

        'gap-y-4',
        'text-gray-300',
        'text-xs',

        'mt-28'
      )}
    >
      <h5 className={classNames('text-white')}>서흥공구.com</h5>

      <div
        className={classNames(
          'flex',
          'flex-col',
          'gap-y-2',
          'text-gray-500',
          'font-normal'
        )}
      >
        <span>
          {router.pathname === '/en' ? 'TEL:' : '대표전화:'}{' '}
          <a href="tel:031-351-5509">031-351-5509</a>
        </span>

        <span>
          {router.pathname === '/en' ? 'CONTACT:' : '문의:'}{' '}
          <a href="mailto:sorlti6952@gmail.com">sorlti6952@gmail.com</a>
        </span>

        <span>
          (우){' '}
          {router.pathname === '/en'
            ? '3.1manse-ro, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Republic of Korea'
            : '경기 화성시 장안면 3.1만세로 457 1층 457,'}
        </span>

        <span>
          사업자등록번호 : 476-87-01323, 통신판매업 신고 : 제 2020-화성장안-0002
          호
        </span>

        <strong>
          Copyright 2023. 주식회사 공구여신 inc. all rights reserved.
        </strong>
      </div>
    </Container>
  );
};
