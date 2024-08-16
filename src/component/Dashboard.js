import React, { useEffect, useState } from 'react';
import home1 from '../assets/images/home-2-img.png';
import home2 from '../assets/images/homr-2-bg-bottom.png';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useAccount, useContract,useContractWrite,useContractRead,useWaitForTransaction } from 'wagmi';
import { useAccountPlates, useGetAllPenalties } from '../contract/ContractController';
import contractAddress from "../contract/ContractAddress.json";
import contractABI from "../contract/ContractABI.json";
import { ethers, utils } from 'ethers';
import { BigNumber } from 'ethers';
import { toast } from 'react-toastify';
const Dashboard = () => {

  const [selectedButton, setSelectedButton] = useState('licensePlates');
  const [selectedOption, setSelectedOption] = useState(null);
  const [plate, setPlate] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'ascending' });
  const [sortedPenalties, setSortedPenalties] = useState([]);
  const [penaltiesSorted, setPenaltiesSorted] = useState(false);
  const [totalAmount,setTotalAmount] = useState("0");
  const [selectedPenalties, setSelectedPenalties] = useState([]);
  const [accountAddress, setAccountAddress] = useState(useAccount().address);
  const [maticAmount,setMaticAmount] = useState(0);
  const [LPPBalance,setLPPBalance] = useState(0);
  const LPPBalanceTemp = useContractRead({
    address: contractAddress.address,
    abi: contractABI.abi,
    functionName: "balanceOf",
    args:[accountAddress]
  }).data;
  useEffect(()=>{
    if(LPPBalanceTemp.toNumber()>=1){
      setLPPBalance(LPPBalanceTemp.toNumber())
    }else{
      setLPPBalance(0);
    }
    
  },[LPPBalance])
  


  const tokenPrice = useContractRead({
    address: contractAddress.address,
    abi: contractABI.abi,
    functionName: "tokenPrice",
  }).data;

  const transactionHistory = useContractRead({
    address: contractAddress.address,
    abi: contractABI.abi,
    functionName: "getTransactionHistory",
    args:[plate]
  }).data;
  console.log(transactionHistory)
// Convert tokenPrice from Bignumber to JavaScript number
  const tokenPriceNumber = tokenPrice ? parseFloat(utils.formatUnits(tokenPrice, 18)) : 0;

  // Use tokenPriceNumber with the toFixed function
  const formattedTokenPrice = tokenPriceNumber.toFixed(10);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleOptionChange = (event) => {
    handlePlateChange(event);
    setSelectedOption(event.target.value);
  };

  const handlePlateChange = (event) => {
    setPlate(event.target.value);
  };

  const plates = useAccountPlates().data;
  const penalties = useGetAllPenalties(plate).data;
  
  useEffect(() => {
    if (penalties && penalties.length > 0 && !penaltiesSorted) {
      const sorted = [...penalties].sort((a, b) => a.date - b.date);
      setSortedPenalties(sorted);
      setPenaltiesSorted(true);
    }
  }, [penalties, penaltiesSorted]);


  const handleMaticPrice = (event) => {
    const value = event.target.value;
    if (value === "") {
      setMaticAmount("0");
    } else {
      const maticValue = parseFloat(value);
      const tokenPriceNumber = tokenPrice ? parseFloat(utils.formatUnits(tokenPrice, 17)) : 0;
      if (tokenPriceNumber !== 0) {
        const maticAmount = (maticValue / tokenPriceNumber).toFixed(3);
        setMaticAmount(maticAmount);
      } else {
        setMaticAmount("0");
      }
    }
  };
  
  // Sort penalties array in ascending order based on the date
  const handlePenaltySelection = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
  
    if (isChecked && penalties && penalties.length>0) {
      if (!selectedPenalties.includes(value)) {
        setSelectedPenalties([...selectedPenalties, value]);
        const newTotalAmount = parseInt(totalAmount) + penalties[value].penaltyAmount.toNumber();
        setTotalAmount(newTotalAmount.toString());
      }
    } else {
      const index = selectedPenalties.indexOf(value);
      if (index !== -1) {
        setSelectedPenalties(selectedPenalties.filter((_, i) => i !== index));
        const newTotalAmount = parseInt(totalAmount) - penalties[value].penaltyAmount.toNumber();
        setTotalAmount(newTotalAmount.toString());
      }
    }
  };


  const {write:payFee, data:feeTxn} = useContractWrite({
    address: contractAddress.address,
    abi: contractABI.abi,
    functionName: "payPenalties",
    args: [plate,selectedPenalties],
    overrides: {
      from: accountAddress,
    },
  })
  const {write:exchangeMatic, data:exchangeMaticTxn} = useContractWrite({
    address: contractAddress.address,
    abi: contractABI.abi,
    functionName: "buyTokens",
    overrides: {
      from: accountAddress,
      value:ethers.utils.parseEther(maticAmount.toString())
    },
  })
  const {isLoading:payingFeeWaiting,isSuccess:payingFeeSuccess} = useWaitForTransaction({
    hash: feeTxn?.hash,
  });
  const {isLoading:exchangeWaiting,isSuccess:exchangeWaitingSuccess} = useWaitForTransaction({
    hash: exchangeMaticTxn?.hash,
  });
  
  useEffect(() => {
    let toastId = null;
  
    if (payingFeeWaiting || exchangeWaiting) {
      toastId = toast.loading('Your request is being processed', {
        position: "top-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
    } else if (payingFeeSuccess|| exchangeWaitingSuccess) {
      toast.dismiss(toastId); // Dismiss the loading toast
      toast.success('Your request has succeeded', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
        onClose:()=>window.location.reload(),
      });
    }
  
    // Cleanup function to dismiss the toast when unmounting the component
    return () => toast.dismiss(toastId);
  }, [payingFeeWaiting,exchangeWaiting,exchangeWaitingSuccess, payingFeeSuccess]);

  return (
    <section className="section home-2-bg" id="home">
      <div className='dashboard-wrapper'>
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group mr-2 btn-group-wrapper" role="group" aria-label="First group">
            <button type="button" className={`dashboard-btn text-light mb-1 fw-light text-uppercase ${selectedButton === 'licensePlates' ? 'active' : ''}`} onClick={() => handleButtonClick('licensePlates')}>My License Plates</button>
            <button type="button" className={`dashboard-btn text-light mb-1 fw-light text-uppercase ${selectedButton === 'exchanger' ? 'active' : ''}`} onClick={() => handleButtonClick('exchanger')}>Exchanger</button>
            <button type="button" className={`dashboard-btn text-light mb-1 fw-light text-uppercase ${selectedButton === 'transactionHistory' ? 'active' : ''}`} onClick={() => handleButtonClick('transactionHistory')}>Transaction History</button>
                  <span className={`dashboard-btn text-light mb-1 fw-light text-uppercase`}>
                    LPP Balance: {LPPBalance}
                  </span>
          </div>
        </div>
        <div className='seperator'></div>
        <div className='dashboard-section-wrapper'>
          {selectedButton === 'licensePlates' && (
            <div>
              <div className='section-desc'>
                <h2 className='text-light mb-1 fw-light text-uppercase'>My License Plates</h2>
                <p className='text-white mb-1 fw-light section-sub-title'>You can see all your license plates and penalties.</p>
              </div>
              {plates && plates.length > 0 && (
                <div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" className='text-light mb-1 fw-light'>Select an option:</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={handleOptionChange}>
                      <option value="">Select an option</option>
                      {plates.map((plate) => (
                        <option key={plate} value={plate}>{plate}</option>
                      ))}
                    </select>
                  </div>
                  <hr/>
                  <div className="selected-content">
                    {selectedOption && plates.map((plate) => plate === selectedOption && (
                      <div key={plate}>
                          <div className='table-responsive penalty-table'>
                          <table className="table penalty-table-body ">
                              <thead className='thead-dark '>
                                <tr className='table-headers'>
                                  <th scope="col" >Date</th>
                                  <th scope="col">Description</th>
                                  <th scope="col" >Penalty Fee</th>
                                  <th scope="col">Select Penalty</th>
                                </tr>
                              </thead>
                              <tbody>
                              {penalties && penalties.length>0 && penalties.map((penalty, index) => {
                                const date = new Date(penalty.date * 1000);
                                const formattedDate = date.toLocaleDateString();
                                const originalIndex = penalties.indexOf(penalty)
                                return (
                                  <tr className='penalty-table-row' key={originalIndex}>
                                    <td className="td-divider">{formattedDate}</td>
                                    <td className="td-divider">{penalty.description}</td>
                                    <td className="td-divider">{penalty.penaltyAmount.toNumber()} LPP</td>
                                    <td><input onClick={handlePenaltySelection} className='select-penalty-button' type="checkbox" value={originalIndex} /></td>
                                  </tr>
                                );
                              })}
                               
                              </tbody>
                            </table>
                            {plate && plate !== "" && (
                              <div className='total-amount-section-wrapper'>
                                <span className='total-amount-text'>Total Amount: {totalAmount}</span>
                                <button id='pay-button' className='btn' onClick={payFee}>Pay</button>
                              </div>
                            )}
                          </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          {selectedButton === 'exchanger' && (
            <div className='exchanger-wrapper'>
              <div className='exchanger-input-wrapper'>

              <h5>Current LPP Price: {formattedTokenPrice} MATIC</h5>
              <div class="input-group input-group-sm mb-3">
                
                  <div class="input-group-prepend">
                  <span class="input-group-text input-text" id="license-plate-label2">{maticAmount} MATIC</span>
                  </div>
                  <input onChange={handleMaticPrice} type="text" class="form-control input-text-place" id='license-plate-field2' placeholder='0' aria-label="Default" aria-describedby="license-plate-label2"/>
                  <button onClick={exchangeMatic}>buy</button>
                </div>
              </div>
            </div>
          )}
          {selectedButton === 'transactionHistory' && (
            <div>
            <div className='section-desc'>
              <h2 className='text-light mb-1 fw-light text-uppercase'>TRANSACTION HISTORY</h2>
              <p className='text-white mb-1 fw-light section-sub-title'>You can see all your paid license plates and penalties.</p>
            </div>
            {plates && plates.length > 0 && (
              <div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1" className='text-light mb-1 fw-light'>Select an option:</label>
                  <select className="form-control" id="exampleFormControlSelect1" onChange={handleOptionChange}>
                    <option value="">Select an option</option>
                    {plates.map((plate) => (
                      <option key={plate} value={plate}>{plate}</option>
                    ))}
                  </select>
                </div>
                <hr/>
                <div className="selected-content">
                  {selectedOption && plates.map((plate) => plate === selectedOption && (
                    <div key={plate}>
                        <div className='table-responsive penalty-table'>
                        <table className="table penalty-table-body ">
                            <thead className='thead-dark '>
                              <tr className='table-headers'>
                                <th scope="col" >Payer</th>
                                <th scope="col">Penalty Fee</th>
                                <th scope="col" >Payment Date</th>
                              </tr>
                            </thead>
                            <tbody>
                            {transactionHistory && transactionHistory.length && transactionHistory.map((transaction, index) => {
                              const date = new Date(transaction.date * 1000);
                              const formattedDate = date.toLocaleDateString();
                              const payer = (transaction.payer).toString()
                              return (
                                <tr className='penalty-table-row' key={index}>
                                  <td className="td-divider">{payer}</td>
                                  <td className="td-divider">{transaction.amount.toNumber()} LPP</td>
                                  <td className='td-divider'>{formattedDate}</td>
                                </tr>
                              );
                            })}
                             
                            </tbody>
                          </table>
                        
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          )}
        </div>
      </div>
    </section>
  );
  
  
          }
export default Dashboard
