const { Types } = require("mongoose");
const { Invoice } = require("../Models/invoices");
const { poDetails, PoDetails } = require("../Models/poDetails");
let total_invoice=0;
const d = new Date();
let year = String(d.getFullYear());
let full_year=parseInt(year.slice(-2))+1;
let month=String(d.getMonth()+1)<10?"0"+String(d.getMonth()+1):String(d.getMonth()+1);

const addpoDetails = async (data) => {
  const userId = new Types.ObjectId(data.user_id);
   
  const countInvoice =  await Invoice.aggregate([
    {
      $match: {
        po_number:{
          $exists:true,
          
        }
      },
      
    },
    { $sort: { created_at: -1 } },
    
    { $project: {_id: 0,invoice_number:1}},
    
  ]);
  console.log("countinvoice>>>>>",countInvoice);
  // console.log("total_invoice>>>>>",countInvoice[0].invoice_number.slice(20));
  total_invoice=countInvoice[0]?parseInt(countInvoice[0].invoice_number.slice(20)):0;
  console.log("total_invoice>>>>>",total_invoice);
  let invoice="REG/"+year+"-"+full_year+"/"+month+"/"+"regss"+(total_invoice?total_invoice+1:1);
  const invoice_details=await Invoice.create({
    ...data,
    user_id:userId,
    invoice_number:invoice,
  });
  const poDetails = await PoDetails.create({
    ...data,
    user_id: userId,
    invoice_number:invoice,
    
  });
  let res;
  if (poDetails) {
    res = {
      success: true,
      message: "po Details added successfully.",
    };
  } else {
    res = {
      success: false,
      message: "Something went wrong.",
    };
  }
  return res;
};

const getPoDetails = async () => {
  // console.log(params);
  // const SKIP = params.limit * params.offset;
  // // const LIMIT = params.limit;
  // const userId = new Types.ObjectId(data.userId);
  const posList = await PoDetails.aggregate([ 
    {
      $match: {
        po_number:{
          $exists:true,
        }
      },     
    },
    // { $sort: { created_at: -1 } },
    // { $skip: SKIP },
    // { $limit: LIMIT },
  ]);
  if (posList) {
    res = {
      success: true,
      message: "po Details found successfully.",
      data: posList,
    };
  } else {
    res = {
      success: false,
      message: "No pos found.",
    };
  }
  return res;
};

const updatepoDetails = async (data) => {
  console.log(">>>>>>>>>>>>>>>>>poServicedata", data);
  const userId = new Types.ObjectId(data.user_id);
  console.log(">>>>>>>>>>>>>>>>>userId", userId);
  const poUpdatedDetail = await PoDetails.updateMany(
    {user_id: new Types.ObjectId(data.user_id)},
    {$set: {...data}},
    {upsert: false}
  );
  console.log(">>>>>>>>>>>>>>>>>poDetails", poUpdatedDetail);
  let res;
  if (poUpdatedDetail) {
    res = {
      success: true,
      message: "po Details updated successfully.",
    };
  } else {
    res = {
      success: false,
      message: "Something went wrong.",
    };
  }
  return res;
};

const deletepoDetails = async (params) => {
  console.log(">>>>>>>>>>>>>>>>>data", params);
  // const userId = new Types.ObjectId(data.user_id);
  const poDetail = await PoDetails.deleteOne({
    user_id: params.id
  });
  // console.log(">>>>>>>>>>>>>>>>>poDetails", poDetails);
  let res;
  if (poDetail) {
    res = {
      success: true,
      message: "po Details deleted successfully.",
    };
  } else {
    res = {
      success: false,
      message: "Something went wrong.",
    };
  }
  return res;
};

module.exports = { addpoDetails, getPoDetails, updatepoDetails, deletepoDetails, }; 