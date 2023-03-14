import { useRouter } from "next/router";
import { useEffect } from "react";

export const Page = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/');
    window.location.href = 'https://pf.kakao.com/_TxgJJT';
  }, [])
}

export default Page