import React from 'react'
function Details({ location }) {
  const memberDetails = location.state && location.state.memberDetails;

  if (!memberDetails) {
    return <div>No member details found.</div>; 
  }

  return (
    <div>
      <h2>Member Details</h2>
      <ul>
        <li>Member Name: {memberDetails?.MemberName || 'N/A'}</li> {/* Adding optional chaining and a default value */}
        <li>Member Address: {memberDetails?.MemberAddress || 'N/A'}</li>
        <li>Member City Name: {memberDetails?.MemberCityName || 'N/A'}</li>
        <li>Member PIN Code: {memberDetails?.MemberPINCode || 'N/A'}</li>
        <li>Mobile No: {memberDetails?.MobileNo || 'N/A'}</li>
        <li>Email ID: {memberDetails?.EmailID || 'N/A'}</li>
        <li>Member PAN No: {memberDetails?.MemberPANNo || 'N/A'}</li>
        <li>Birth Date: {memberDetails?.BirthDate || 'N/A'}</li>
      </ul>
    </div>
  );
}



export default Details