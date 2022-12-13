import { Header } from './components/header'
import { MainSection } from './components/main-section/main-section'
import { SSection } from './components/second-section/second-section'
import { Wrapper } from './components/wrapper'

function App() {
  return (
    <Wrapper>
      <Header />
      <MainSection />
      <SSection />
    </Wrapper>
  )
}

export default App
