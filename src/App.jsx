import useStore from "../store";
import Form from "./components/Form";
import List from "./components/List";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient()
  const { showAddForm } = useStore();
  return (
    <QueryClientProvider client={client}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "screen",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <List />
        {showAddForm && <Form />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
