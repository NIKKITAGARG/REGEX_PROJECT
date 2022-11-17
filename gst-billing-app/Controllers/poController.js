const poService = require("../Services/poService");
const addpoDetails = async (req, res) => {
  // console.log("<<controller")
  const userId = req.id;
  // console.log(">>>>>>>>>>>>>>>", userId);
  const response = await poService.addpoDetails({
    ...req.body,
    user_id: userId,
  });
 
  res.send(response);
};

const getpoList = async (req, res) => {
  // const  userId = req.params.userId;
  const response = await poService.getPoDetails();
  console.log(response);

  res.send(response);
};

const updatepoDetails = async (req, res) => {
  console.log("<<controllerUpdate", req.body)
  // const po_num = req.id;
  // console.log(">>>>>>>>>>>>>>>", userId);
  // const userId = req.id;
  const response = await poService.updatepoDetails({
    ...req.body,
    // user_id: userId,
  });

  res.send(response);
};

const deletepoDetails = async (req, res) => {
  console.log("<<controller", req.params);
  const response = await poService.deletepoDetails(req.params);
  res.send(response);
};

module.exports = { addpoDetails, getpoList, updatepoDetails, deletepoDetails };

// {
//   ...req.body,
//   po_number: po_num,
// }
