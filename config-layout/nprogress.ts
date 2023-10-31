'use client'

import { useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'

export default function RootProgress() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
  
    useEffect(() => {
      NProgress.done();
      return () => {
        NProgress.start();
      };
    }, [pathname, searchParams]);

    return null
}