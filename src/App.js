import React from "react";
import Route from "./Routes/routeIndex";
import "./App.css";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, useAccount, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, polygonMumbai } from 'wagmi/chains'
import { watchAccount } from '@wagmi/core'
//import style
import "./assets/css/pe-icon-7.css";
import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/theme.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const chains = [polygonMumbai] // add Mumbai chain configuration
const projectId = '479c84877fafebe61868d726a1c4d6c9'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer 
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <WagmiConfig client={wagmiClient}>
        <Route />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </React.Fragment>
  );
}

export default App;
