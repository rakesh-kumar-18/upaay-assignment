import { Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Flex flex="1" overflowY="auto" p={4}>
          <Dashboard />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
