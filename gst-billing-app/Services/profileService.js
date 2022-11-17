
const getProfileDetails = async () => {
  // console.log(params);
  // const SKIP = params.limit * params.offset;
  // // const LIMIT = params.limit;
  // const userId = new Types.ObjectId(data.userId);
  const Profile = await([ 
    {company: "Regex Software Services"},
    {address_line_1: "Near Gopalpura Mod"},
    {address_line_2: "Jaipur"},
    {gst_in: "123457890"},
    {pan: "456789"},
    {contact: "9876543210"},
    {beneficiary: "Regex Software Services"},
    {account:"XXXXXXXXX789"},
    {ifsc:"AXIS0732"},
    {bankaddress:"Malviya Nagar"}
    // { $sort: { created_at: -1 } },
    // { $skip: SKIP },
    // { $limit: LIMIT },
  ]);
  if (Profile) {
    res = {
      success: true,
      message: "profile Details found successfully.",
      data: Profile,
    };
  } else {
    res = {
      success: false,
      message: "No profile found.",
    };
  }
  return res;
};


module.exports = { getProfileDetails }; 