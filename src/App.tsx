import Navigation from './components/Navigation';

import Button from './components/Button';

function App() {
  return (
    <>
      <Navigation />
      <main>
        Personal finance app
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='tertiary'>Tertiary</Button>
        <Button variant='destroy'>Destroy</Button>
      </main>
    </>
  );
}

export default App;
