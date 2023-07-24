import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Marketplace from '../abis/Marketplace.json';
import Main from '../components/Main';

const CreateProduct = () => {
  const [account, setAccount] = useState('');
  const [productCount, setProductCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [marketplace, setMarketplace] = useState(null);

  useEffect(() => {
    const loadBlockchainData = async () => {
      await loadWeb3();
      const web3 = window.web3;
      // Load account
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      const networkId = await web3.eth.net.getId();
      const networkData = Marketplace.networks[networkId];
      if (networkData) {
        const marketplaceContract = new web3.eth.Contract(Marketplace.abi, networkData.address);
        setMarketplace(marketplaceContract);
        const productCount = await marketplaceContract.methods.productCount().call();
        setProductCount(productCount);
        // Load products
        const loadedProducts = [];
        for (let i = 1; i <= productCount; i++) {
          const product = await marketplaceContract.methods.products(i).call();
          loadedProducts.push(product);
        }
        setProducts(loadedProducts);
        setLoading(false);
      } else {
        window.alert('Marketplace contract not deployed to detected network.');
      }
    };

    loadBlockchainData();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  };

  const createProduct = async (name, price) => {
    setLoading(true);
    await marketplace.methods
      .createProduct(name, price)
      .send({ from: account })
      .once('receipt', (receipt) => {
        setLoading(false);
      });
  };

  const purchaseProduct = async (id, price) => {
    setLoading(true);
    await marketplace.methods
      .purchaseProduct(id)
      .send({ from: account, value: price })
      .once('receipt', (receipt) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex">
            {loading ? (
              <div id="loader" className="text-center">
                <p className="text-center">Loading...</p>
              </div>
            ) : (
              <Main
                products={products}
                createProduct={createProduct}
                purchaseProduct={purchaseProduct}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
