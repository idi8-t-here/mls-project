import React from "react";
import MUIDataTable from 'mui-datatables'

const DatatableComponent = ({columns, data}) => {
  

  const options = {
    filterType: "checkbox",
  };
  return (
    <div>
      <MUIDataTable
        title={""}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default DatatableComponent;
