import { Header } from './components/header'
import { MainSection } from './components/main-section'
import { Wrapper } from './components/wrapper'

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <MainSection />
      </Wrapper>
    </div>
  )
}

export default App
