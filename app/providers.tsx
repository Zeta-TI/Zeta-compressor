'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useState } from 'react'

import { TooltipProvider } from '../components/ui/tooltip'
import ConfigAos from '../config-layout/config-aos'
import RootProgress from '../config-layout/nprogress'

import { Theme } from '@radix-ui/themes';
import { Toaster } from 'sonner'

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => {
    return new QueryClient()
  })

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Theme>
        <QueryClientProvider client={queryClient}>
          <JotaiProvider>
            <TooltipProvider>
              <ConfigAos />
              <RootProgress />
              <Toaster position='top-right' />
              {children}
            </TooltipProvider>
          </JotaiProvider>
        </QueryClientProvider>
      </Theme>
    </ThemeProvider>
  )
}