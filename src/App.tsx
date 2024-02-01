import { BrowserRouter } from "react-router-dom"
import { NotificationProvider } from "./context/notification.context"
import { AppRouter } from "./router"

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  )
}

export default App
