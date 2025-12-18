import { Routes, Route } from 'react-router-dom'
import { Demo, Home, Test } from '@/pages'
import { Layout } from "@/components/index"
import { Account, Book, Redeem, View } from './pages/Dashboard'
import Dialog01 from './pages/Confirmed'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Route>
      {/* Dashboard Pages */}
      <Route path="/demo" element={<Demo />}>
        <Route path="/demo/account" element={<Account />} />
        <Route path="/demo/book" element={<Book />} />
        <Route path="/demo/redeem" element={<Redeem />} />
        <Route path="/demo/view" element={<View />} />
        <Route path="/demo/confirmed" element={<Dialog01 />} />
      </Route>
    </Routes>
  )
}

export default App
