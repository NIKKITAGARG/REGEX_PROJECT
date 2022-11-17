import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addPoDetails, updatePoDetails } from "../service/po";

export default function Podetails() {
const location = useLocation();
const authData = useSelector((state) => state.authReducer);
const prev_data=useSelector((state)=>state.poReducer);
console.log(">>>>>prev_data", prev_data);
const navigate = useNavigate();
console.log(">>>>>>>>>>>>location.pathname",location.pathname);

const [ poNumber, setPONumber ] = useState(location.pathname==="/edit"?prev_data.po_number:"");
const [ gstin, setGSTIN ] = useState(location.pathname==="/edit"?prev_data.gst_in:"");
const [ dateOfIssue, setDateOfIssue ] = useState(location.pathname==="/edit"?(prev_data.date_of_issue).slice(0,10):"");
const [ zpid, setZPID ] = useState(location.pathname==="/edit"?prev_data.zpid:"");
const [ paymentTerms, setPaymentTerms ] = useState(location.pathname==="/edit"?prev_data.payment_terms:"");
const [ nameOfTheTrainer, setNameOfTheTrainer ] = useState(location.pathname==="/edit"?prev_data.name_of_the_trainer:"");
const [ trainingDeliveryLocation, setTrainingDeliveryLocation ] = useState(location.pathname==="/edit"?prev_data.training_delivery_location:"");
const [ technology, setTechnology ] = useState(location.pathname==="/edit"?prev_data.technology:"");
const [ trainingDates, setTrainingDates ] = useState(location.pathname==="/edit"?prev_data.training_dates:"");
const [ totalDuration, setTotalDuration ] = useState(location.pathname==="/edit"?prev_data.total_duration:"");
const [ address, setAddress ] = useState(location.pathname==="/edit"?prev_data.address:"");
const [ client, setClient ] = useState(location.pathname==="/edit"?prev_data.client:"");


const onChange = (event, type) => {
    switch (type) {
      case "poNumber":
        setPONumber(event.target.value);
        break;
      case "gstin":
        setGSTIN(event.target.value);
        break;

      case "dateOfIssue":
        setDateOfIssue(event.target.value);
        break;

      case "zpid":
        setZPID(event.target.value);
        break;
      case "client":
        setClient(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      case "paymentTerms":
        setPaymentTerms(event.target.value);
        break;

      case "nameOfTheTrainer":
        setNameOfTheTrainer(event.target.value);
        break;

      case "trainingDeliveryLocation":
        setTrainingDeliveryLocation(event.target.value);
        break;

      case "technology":
        setTechnology(event.target.value);
        break;

      case "trainingDates":
        setTrainingDates(event.target.value);
        break;
      case "totalDuration":
        setTotalDuration(event.target.value);
        break;
    }
  };

  const onAddPoDetails = async (e) => {
    e.preventDefault();
    const poData = {
      user_id : authData._id,
      po_number: poNumber,
      gst_in: gstin,
      date_of_issue: dateOfIssue,
      zpid: zpid,
      payment_terms: paymentTerms,
      name_of_the_trainer: nameOfTheTrainer,
      training_delivery_location: trainingDeliveryLocation,
      technology: technology,
      training_dates: trainingDates,
      total_duration: totalDuration,
      address:address,
      client:client,
    };
    if (window.confirm("Are you sure?")) {
    
    const res = await addPoDetails(poData);
    console.log(">>>>>>>>>>>>>>>>>>>>>>res", res);
    if (res.data.success) {
      alert(res.data.message);
      navigate("/dashboard");
    } else {
      alert(res.data.message ?? "Something went wrong.");
    }
  }
  };
    const edit = async (e) => {
      console.log("prev_data>>>>>>0", prev_data)
      e.preventDefault();
      const poDataupdated= {
        user_id: prev_data.user_id,
        po_number: poNumber,
      gst_in: gstin,
      date_of_issue: dateOfIssue,
      zpid: zpid,
      payment_terms: paymentTerms,
      name_of_the_trainer: nameOfTheTrainer,
      training_delivery_location: trainingDeliveryLocation,
      technology: technology,
      training_dates: trainingDates,
      total_duration: totalDuration,
      client:client,
      address:address,
      };
      console.log(poDataupdated);
      const confirm= window.confirm("Are you Sure?");
      if(confirm){
        const res = await updatePoDetails(poDataupdated);
        console.log(">>>>>>>>>>>>>>>>>>>>>>res", res);
        if (res.data.success) {
          alert(res.data.message);
          navigate("/dashboard");
        } else {
          alert(res.data.message ?? "Something went wrong.");
        }
      }
   };

  return (
    <div className='container my-4 w-50'>
        <center><h3 className='my-3'>Purchase Order</h3></center>
    <form className='border border-dark my-3'>
    <div className="mb-3 mx-2  row">
    <label htmlFor="po" className="col-sm-2 col-form-label">PO Number</label>
    <div className="col-sm-10">
      <input value={poNumber}
            type="text"
            required
            onChange={(event) => onChange(event, "poNumber")}   className="form-control-plaintext" id="po" />
    </div>
  </div>
  <div className="mb-3 mx-2  row">
    <label htmlFor="client" className="col-sm-2 col-form-label">Client</label>
    <div className="col-sm-10">
      <input value={client} 
            type="text"
            required
            onChange={(event) => onChange(event, "client")}   className="form-control-plaintext" id="client" />
    </div>
  </div>
  <div className="mb-3 mx-2  row">
    <label htmlFor="gstin" className="col-sm-2 col-form-label">GSTIN</label>
    <div className="col-sm-10">
      <input value={gstin}
            type="text"
            required
            onChange={(event) => onChange(event, "gstin")}   className="form-control-plaintext" id="gstin" />
    </div>
  </div>
  <div className="mb-3 mx-2  row">
    <label htmlFor="date" className="col-sm-2 col-form-label">Date of Issue</label>
    <div className="col-sm -10">
      <input value={dateOfIssue}
            type="date"
            required
            onChange={(event) => onChange(event, "dateOfIssue")}   className="form-control-plaintext" id="date" />
    </div>
  </div>
  <div className="mb-3 mx-2  row">
    <label htmlFor="zpid" className="col-sm-2 col-form-label">Phone</label>
    <div className="col-sm-10">
      <input value={zpid} 
            type="text"
            required
            onChange={(event) => onChange(event, "zpid")}   className="form-control-plaintext" id="zpid" />
    </div>
  </div>
  <div className="mb-3 mx-2  row">
    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
    <div className="col-sm-10">
      <input value={address} 
            type="text"
            required
            onChange={(event) => onChange(event, "address")}   className="form-control-plaintext" id="address" />
    </div>
  </div>
  
  <label htmlFor="floatingTextarea" className="col-sm-2 col-form-label">Payment terms</label>
  <div className="form-floating">
  <textarea className="form-control" value={paymentTerms} 
            type="text"
            required
            onChange={(event) => onChange(event, "paymentTerms")} placeholder="30 Days credit from the receipt of the invoice after successful completion." id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">30 Days credit from the receipt of the invoice after successful completion.</label>
</div>
  </form>
  <center><h4>Description</h4></center>
  <div className='border border-dark'>   
  <div className="mb-3 mx-2 row ">
    <label htmlFor="name" className="col-sm-3 col-form-label">Name of the trainer</label>
    <div className="col-sm-9">
      <input value={nameOfTheTrainer}
            type="text"
            required
            onChange={(event) => onChange(event, "nameOfTheTrainer")}   className="form-control-plaintext" id="name" />
    </div>
  </div>
  <div className="mb-3 mx-2  row ">
    <label htmlFor="loc" className="col-sm-4 col-form-label">Training delivery location</label>
    <div className="col-sm-8">
      <input value={trainingDeliveryLocation}
            type="text"
            required
            onChange={(event) => onChange(event, "trainingDeliveryLocation")}   className="form-control-plaintext" id="loc" />
    </div>
  </div>
  <div className=" mb-3 mx-2  row ">
    <label htmlFor="tech" className="col-sm-2 col-form-label">Technology</label>
    <div className="col-sm-10">
      <input value={technology}
            type="text"
            required
            onChange={(event) => onChange(event, "technology")} className="form-control-plaintext" id="tech" />
    </div>
  </div>
  <div className=" mb-3 mx-2  row">
    <label htmlFor="time" className="col-sm-2 col-form-label">Training dates</label>
    <div className="col-sm -10">
      <input value={trainingDates}
            type="text"
            required
            onChange={(event) => onChange(event, "trainingDates")} className="form-control-plaintext" id="time" />
    </div>
  </div>
  <div className=" mb-3 mx-2  row">
    <label htmlFor="dura" className="col-sm-2 col-form-label">Total duration</label>
    <div className="col-sm -10">
      <input value={totalDuration} 
            type="text"
            required
            onChange={(event) => onChange(event, "totalDuration")} className="form-control-plaintext" id="dura" />
    </div>
  </div>
  </div>
  <div className="d-grid gap-2 d-md-flex my-3 justify-content-md-end">
      {/* <button className="btn btn-primary me-3" type="button">Back</button> */}
      <button type="submit" onClick={location.pathname=="/podetails"?onAddPoDetails:edit} className="btn btn-primary btn-lg">{location.pathname=="/podetails"?"Add Details":"Edit Details"}</button>
  </div>
  
  </div>
  )
};
