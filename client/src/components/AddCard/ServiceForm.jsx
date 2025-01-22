// components/ServiceForm.js
import MultiSelect from "react-multiple-select-dropdown-lite";
import InputSelect from "./InputSelect";

export const ServiceForm = ({
  onSubmit,
  businessList,
  frequencyList,
  loading,
  formData,
  onChange,
  onServiceSelect,
}) => (
  <form onSubmit={onSubmit} className="row g-3">
    <div className="col-md-4">
      <InputSelect
        label="Business"
        name="business"
        value={formData.business}
        data={businessList}
        onChange={onChange}
      />
    </div>

    <div className="col-md-4">
      <MultiSelect
        onChange={onServiceSelect}
        options={frequencyList}
        className="multiselect"
        required
      />
    </div>

    <div className="col-md-3">
      <textarea
        className="form-control"
        name="treatmentLocation"
        value={formData.treatmentLocation}
        onChange={onChange}
        placeholder="Location To Be Treated"
        required
      />
    </div>

    <div className="col-md-1">
      <button className="btn btn-dark" type="submit" disabled={loading}>
        Save
      </button>
    </div>
  </form>
);
