import Balance from "./Components/Balance"
import Tracker from "./Components/Tracker"
import History from "./Components/History"
import Transaction from "./Components/Transaction"
import CustomProvider from "./Hooks/CustomProvider"

function App() {


  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <CustomProvider>
          <Balance />
          <Tracker />
          <History />
          <Transaction />
        </CustomProvider>

      </div>

    </>
  )
}

export default App
