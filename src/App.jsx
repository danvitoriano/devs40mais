import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Event from './components/Event'
import About from './components/About'
import Features from './components/Features'
import Retrospective from './components/Retrospective'
import Podcast from './components/Podcast'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<><Hero /><Features /><Event /></>} />
        <Route path="/evento" element={<Event />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/retrospectiva" element={<Retrospective />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/contato" element={<Contact />} />
      </Route>
    </Routes>
  )
}
