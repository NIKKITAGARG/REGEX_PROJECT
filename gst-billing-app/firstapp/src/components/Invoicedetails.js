import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getPoList } from '../service/po';

export default function Invoicedetails() {
  const [searchPOs, setSearchPOs] = useState("");
  const [usersData, setUsersData] = useState("");
  const [filteredPOs, setFilteredPOs] = useState("");

  const onChangeText = (event) => {
    setSearchPOs(event.target.value);
  };

  useEffect(() => {
    console.log(">>>>>> useEffect searchText  ", searchPOs);

    const filteredPo = usersData.filter((value) => {
      return value.name.includes(searchPOs);
    });
    setFilteredPOs(filteredPo);
  }, [searchPOs]);

  const onSearchPoDetails = async (e) => {
    e.preventDefault();
    const res = await getPoList();
    console.log(">>>>>>>>POList res ", res);
    if (res.data.success) {
      setUsersData(res.data.data);
      setFilteredPOs(res.data.data);
    }
  };

  const usersJsxData = filteredPOs.map((value) => {
    return (
      <p>
        Name: {value.name}, Email: {value.email}, Phone no:{" "}
        {value.phone_no ? value.phone_no : "--"}
      </p>
    );
  });

  return (
    <div className='container w-50 mt-5'>
    <nav className="mt-5 navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Enter PO number:</a>
    <form className="d-flex">
      <input onChange={(event)=>onChangeText(event)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button onClick={onSearchPoDetails} className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
<center><button type="button" className="my-4 btn btn-success btn-lg">Generate PDF</button></center>
<div>{usersJsxData}</div>
    </div>
  )
}
