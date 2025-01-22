// components/ContractHeader.js
import moment from "moment";

export const ContractHeader = ({ contractNo, startDate, endDate }) => (
  <div className="row g-4">
    <div className="col-md-4">
      <h4>Contract Number: {contractNo}</h4>
    </div>
    <div className="col-md-4">
      <h4>Start Date: {moment(startDate).format("DD/MM/YYYY")}</h4>
    </div>
    <div className="col-md-4">
      <h4>End Date: {moment(endDate).format("DD/MM/YYYY")}</h4>
    </div>
    <hr />
  </div>
);
