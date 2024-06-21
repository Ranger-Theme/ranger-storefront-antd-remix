import GlobalStyled from '@/components/GlobalStyled'
import Header from '@/components/Header'

import { StyledAppShell } from './styled'

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledAppShell>
      <GlobalStyled />
      <Header />
      {children}
    </StyledAppShell>
  )
}

export default AppShell
