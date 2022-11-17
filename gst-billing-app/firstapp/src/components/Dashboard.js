import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePoDetails, getPoList} from '../service/po';
import { useState } from 'react';
import { logoutAction } from "../redux/actions/authAction";
import { useEffect } from 'react';
import { getProfile } from '../service/profile';
import Podetails from './Podetails';
import { selectedPOAction } from '../redux/actions/poAction';

export default function Dashboard() {
  const [usersData, setUsersData] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [filteredData, setFilteredData] = useState();
  const [selectData, setSelectData] = useState({});
  const prev_data = useSelector((state)=> state.poReducer);

  const onChangeText = (event) => {
    console.log("inside onChangeText");
    setSearchText(event.target.value);
  };

  const onLogout = () => {
    if (window.confirm("Are you sure?")) {
      localStorage.clear();
      dispatch(logoutAction());
      navigate("/login");
    }
  };
  useEffect(() => {
    getpo();
  }, []);
  useEffect(() => {
    console.log(">>>>>> useEffect searchText  ", searchText);
    const filteredUsers = usersData && usersData.filter((value) => {console.log("searched");
      return value.po_number.includes(searchText);   
    });
    setFilteredData(filteredUsers);
  }, [searchText]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const po = (type)=>{
        navigate(type);
    }
    
    let res = {};
    let poArray = [];
    const getpo = async () => {
      const res = await getPoList();
      console.log(">>>>>>>>userList res ", res);
      poArray = res.data.data;
      if (res.data.success) {
        setUsersData(poArray);
        setFilteredData(res.data.data);
        console.log("user",usersData);
      }
    }; 
    
    const deletePO = async ()=>{
      console.log(">>>>>deletepo", po_number);
      if (window.confirm("Are you sure?")) {
      }
      const res = await deletePoDetails(po_number);
      
      if(res.data.success){
          alert(res.data.message);
          console.log("setdeletedData");
          getpo();
      }
      else {
        alert(res.data.message ?? "Something went wrong.");
      }
    };

    const [po_number, setPo_number] = useState("");
    const radio = (pos)=>{
      // po_number = pos.target.value;
      console.log("pos=",pos);
      setPo_number(pos.user_id);
      console.log("pos.user_id", pos.user_id);
      setSelectData(pos);
      console.log("radioponum>>>>>>>>>>selectedData",selectData);
      // deletePoDetails();
     }
     const getprofileinfo = async () => {
      const res = await getProfile();
      console.log(">>>>>>>>profileList res ", res);
      if (res.data.success) {
        alert(res.data.message);
      }
    }; 

    const editPo =()=>{
      dispatch(selectedPOAction(selectData));
      console.log("moving to edit,data", selectData);
      navigate("/edit");
    }

    const raiseInvoice=()=>{
      dispatch(selectedPOAction(selectData));
      navigate("/finalinvoice");
    }
    const usersJsxData = filteredData && filteredData.map((pos)=>{
      return ( 
          <tr  key={pos.user_id}>
            <th scope='row'>
            <div className='form-check'><input type="radio" onClick={()=>radio(pos)} name='flexRadioDefault' className="form-check-input" id="exampleCheck1"/></div>
            </th>
        
          <td >{pos.po_number}</td>
          <td >{pos.gst_in}</td>
          <td >{pos.date_of_issue}</td>
          <td >{pos.zpid}</td>
          <td >{pos.payment_terms}</td>
          <td >{pos.name_of_the_trainer}</td>
          <td >{pos.training_delivery_location}</td>
          <td >{pos.technology}</td>
          <td >{pos.training_dates}</td>
          <td >{pos.total_duration}</td>
       </tr>    
      );
    });
  return (
    
    <>
      {/* <span>Hello {authData.name}!</span> */}
      <div className='d-flex justify-content-between mx-3  my-3'><div className="d-flex"><h2>DASHBOARD &nbsp; &nbsp; </h2>
      <button className='btn btn-secondary' onClick={() => getprofileinfo()}>Profile</button>
      </div>
      <button className='btn btn-secondary' onClick={() => onLogout()}>Logout</button></div>
      <div className='container d-flex justify-content-center my-3'>
         <button onClick={()=> po('/podetails')} className='btn btn-primary mx-3'>ADD PO Details</button>
         <button onClick={editPo} className='btn btn-primary mx-3'>EDIT PO Details</button>
         <button onClick={(deletePO)} className='btn btn-primary mx-3'>DELETE PO Details</button>
         <button onClick={(raiseInvoice)} className='btn btn-primary mx-3'>Raise Invoice</button>
         {/* <button onClick={getpo} className='btn btn-info'>GET PO List</button> */}
         {/* <button onClick={()=> po('/invoicedetails')} className='btn btn-success mx-3'>Raise Invoice</button> */}
      </div>
      <center><h3>PO LIST</h3></center>
      <div><input className="btn btn-lg border border-dark"
        placeholder="Search PO Number"
        value={searchText}
        type="text"
        onChange={(event) => onChangeText(event)} />
      </div>
      <table className="table table-dark table-striped table-hover max-height-4">
        <thead>
          <tr>
            <th>#</th>
            <th>PO Number</th>
            <th>GSTIN</th>
            <th>Date of Issue</th>
            <th>ZPID</th>
            <th>Payment Terms</th>
            <th>Name of Trainer</th>
            <th>Trainer Delivery Location</th>
            <th>Technology</th>
            <th>Training Dates</th>
            <th>Total Duration</th>
          </tr>
        </thead>
        <tbody>
    {usersJsxData}
        </tbody>
      </table>
    </>
  );
}
