import React, { lazy, Suspense } from 'react'
const Hero = lazy(() => import('./components/Hero'))

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </main>
  )
}

export default App