import React, { useEffect, useLayoutEffect, useState } from 'react';
import { usePrepareContract,useAssignPlatePrepare } from '../contract/ContractController';
import { useAccount, useContractRead,useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import contractAddress from "../contract/ContractAddress.json";
import contractABI from "../contract/ContractABI.json";
import { toast } from 'react-toastify';
const AdminDashboard = () => {


  const [activeButton, setActiveButton] = useState('Assign Plate');
  const [walletAddress, setWalletAddress] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [penaltyFee,setPenaltyFee] = useState(0);
  const [penaltyDate,setPenaltyDate] = useState(0);
  const [penaltyDescription,setPenaltyDescription] = useState('')
  const [loading, setLoading] = useState(false);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleWalletAddressChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const handleLicensePlateChange = (event) => {
    setLicensePlate(event.target.value);
  };
  const handlePenaltyFeeChange = (event) =>{
    setPenaltyFee(event.target.value)
  }
  const handlePenaltyDescriptionChange = (event) =>{
    setPenaltyDescription(event.target.value)
  }
  const handleDateChange = (event) =>{
    var date = event.target.value;
    var unixTime = Math.floor(new Date(date).getTime() / 1000);
    setPenaltyDate(unixTime)
  }
  const account = useAccount().address
  
  const {write:customWrite, data:customData} = useContractWrite({
    address: contractAddress.address,
    abi: contractABI.abi,
    functionName: "assignLicensePlate",
    args: [walletAddress,licensePlate],
    overrides: {
      from: account,
    },
  });

  const {write:assignPenaltyHandler, data:penaltyTxnHash} = useContractWrite({
    address: contractAddress.address,
    abi: contractABI.abi,
    functionName: "assignPenalty",
    args: [licensePlate,penaltyFee,penaltyDate,penaltyDescription],
    overrides: {
      from: account,
    },
  })


const { data, isError, isLoading:addPlateWaiting, isSuccess:addPenaltySuccess, isFetching } = useWaitForTransaction({
  hash: customData?.hash,
});
const {isLoading:assignPenaltyWaiting,isSuccess:assignPenaltySuccess} = useWaitForTransaction({
  hash: penaltyTxnHash?.hash,
});

useEffect(() => {
  let toastId = null;

  if (addPlateWaiting) {
    toastId = toast.loading('Your request is being processed', {
      position: "top-left",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "light",
    });
  } else if (addPenaltySuccess) {
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
}, [addPlateWaiting, addPenaltySuccess]); // re-run effect when isLoading or isSuccess changes

useEffect(() => {
  let toastId = null;

  if (assignPenaltyWaiting) {
    toastId = toast.loading('Your request is being processed', {
      position: "top-left",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "light",
    });
  } else if (assignPenaltySuccess) {
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
}, [assignPenaltyWaiting, assignPenaltySuccess]); // re-run effect when isLoading or isSuccess changes


  
  const renderSection = () => {
    switch (activeButton) {
      case 'Assign Plate':
        return (
          <div className='section-right-wrapper'>
            <div className="section-right">
              <h3 className='section-title text-light mb-1 fw-light text-uppercase'>Assign Plate</h3>
            </div>
            <div className='input-group-wrapper'>
              <div className='input-group-item'>
                <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <span className="input-group-text input-text" id="wallet-address-label">Wallet Address</span>
                  </div>
                  <input onChange={handleWalletAddressChange} type="text" id='license-plate-field1' className="form-control input-text-place" placeholder='0x0000000000000000000000000000000000000000' aria-label="Default" aria-describedby="wallet-address-label"/>
                </div>
                <div className='input-group-item'>
                  <div className="input-group mb-5">
                    <span className="input-group-text input-text" id="license-plate-label">License Plate</span>
                    <input onChange={handleLicensePlateChange} type="text" className="form-control input-text-place" placeholder='34 XXX 000' aria-label="Default" aria-describedby="license-plate-label"/>
                    <div className="input-group-append">
                      <button onClick={customWrite} className="btn btn-outline-secondary" id='input-button' type="button">Add Plate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Assign Penalty':
        return (
          <div className='section-right-wrapper'>
            <div className="section-right">
              <h3 className='section-title text-light mb-1 fw-light text-uppercase'>Assign Penalty</h3>
            </div>
            <div className='input-group-wrapper'>
              <div className='input-group-item'>
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text input-text" id="license-plate-label2">License Plate</span>
                  </div>
                  <input onChange={handleLicensePlateChange} type="text" class="form-control input-text-place" id='license-plate-field2' placeholder='34 XXX 000' aria-label="Default" aria-describedby="license-plate-label2"/>
                  
                </div>
                <br/>
                <div class="input-group input-group-sm mb-5">
                <div class="input-group-prepend">
                  <span class="input-group-text input-text" id="inputGroup-sizing-sm">Description</span>
                </div>
                <input id='penalty-description-text-area' onChange={handlePenaltyDescriptionChange} type="text" class="form-control mb-6" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
               

              </div>
                <div className='input-group-item'>
                  <div class="input-group mb-2">
                    <span class="input-group-text input-text" id="penalty-fee-label">Penalty Fee</span>
                    <input onChange={handlePenaltyFeeChange} type="text" class="form-control input-text-place" placeholder='0.00 LPP' aria-label="Default" aria-describedby="penalty-fee-label"/>
                    <div class="input-group-append">
                      <input className='btn btn-outline-primary date-picker' onChange={handleDateChange} type="date"/>
                      <button onClick={assignPenaltyHandler} class="btn btn-outline-secondary" id='input-button' type="button">Assign Fee</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        break;
      
      case 'Payments Received':
        return (
          <div className='section-right-wrapper'>
            <div className="section-right">
              <h3 className='section-title text-light mb-1 fw-light text-uppercase'>Payments Received</h3>
            </div>
            <div className='input-group-wrapper'>
              <div className='input-group-item'>

              <div className='input-group-item'>
              <div class="input-group mb-2">
              <span class="input-group-text input-text" id="inputGroup-sizing-sm">Received MATIC</span>
              <input type="text" class="form-control input-text-place" placeholder='0.00 MATIC' aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
              
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" id='input-button' type="button">WITHDRAW</button>
                </div>
              </div>
              </div>
              

          </div>
            </div>
          </div>
        );
        break;
      default:
        return null;
    }
  };

  return (
    <section className="section home-2-bg" id="home">
      <div className='dashboard-wrapper'>
        <div className='seperator'></div>
        <div className='dashboard-section-wrapper'>
          <div>
            <div className='section-desc'>
              <h2 className='text-light mb-1 fw-light text-uppercase'>Admin Dashboard</h2>
              <p className='text-white mb-1 fw-light section-sub-title'>You can assign penalties and prices.</p>
            </div>
            <div className='admin-dashboard-wrapper'>
              <div className="admin-dashboard-container">
                <ul className="admin-dashboard-buttons">

                  <li><button className="admin-dashboard-button" onClick={() => handleButtonClick('Assign Plate')}>ASSIGN PLATE</button></li>
                  <li><button className="admin-dashboard-button" onClick={() => handleButtonClick('Assign Penalty')}>ASSIGN PENALTY</button></li>
                  <li><button className="admin-dashboard-button" onClick={() => handleButtonClick('Payments Received')}>PAYMENTS RECEIVED</button></li>
                </ul>
                <div className='seperator-dash'></div>
                {renderSection()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
