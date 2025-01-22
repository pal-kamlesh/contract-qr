// components/ServiceTable.js
export const ServiceTable = ({ services, onDelete, onEdit, isAdmin }) => (
  <table className="table table-striped table-bordered border-dark">
    <thead>
      <tr>
        <th>No</th>
        <th className="text-center">Services</th>
        <th className="text-center">Frequency</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {services?.map((data, index) => (
        <ServiceRow
          key={data._id}
          index={index}
          data={data}
          onDelete={onDelete}
          onEdit={onEdit}
          isAdmin={isAdmin}
        />
      ))}
    </tbody>
  </table>
);
