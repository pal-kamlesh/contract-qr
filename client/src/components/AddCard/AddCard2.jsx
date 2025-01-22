// AddCard.js - Main Component
import { useServiceManagement } from "../../hooks/useServiceManagement";
import { useContract } from "../../hooks/useContract";
import { ContractHeader } from "./ContractHeader";
import { ServiceTable } from "./ServiceTable";
import { ServiceForm } from "../ServiceForm";
import { useDataContext } from "../../context/data_context";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import Alert from "../Alert";
import Loading from "../Loading";

const AddCard = () => {
  const { id } = useParams();
  const { contractData, loading, error } = useContract(id);
  const {
    dueMonths,
    selectedServices,
    chemicals,
    calculateDueDates,
    setSelectedServices,
    mapServicesToChemicals,
  } = useServiceManagement(id);

  const { createCard, displayAlert, showAlert } = useDataContext();
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await createCard(dueMonths, selectedServices, chemicals, id);
        displayAlert("Service added successfully");
      } catch (error) {
        displayAlert(`Error adding service ${error}`);
      }
    },
    [dueMonths, selectedServices, chemicals, id]
  );

  const canManageServices = ["Admin", "Sales"].includes(userRole);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="container my-3">
      <ContractHeader
        contractNo={contractData.contractNo}
        startDate={contractData.startDate}
        endDate={contractData.endDate}
      />

      <ServiceTable
        services={contractData.services}
        onDelete={handleServiceDelete}
        onEdit={handleServiceEdit}
        isAdmin={canManageServices}
      />

      {canManageServices && (
        <ServiceForm
          onSubmit={handleSubmit}
          businessList={businessList}
          frequencyList={frequencyList}
          loading={loading}
          formData={formData}
          onChange={handleFormChange}
          onServiceSelect={setSelectedServices}
        />
      )}

      {showAlert && <Alert />}
    </div>
  );
};

export default AddCard;
