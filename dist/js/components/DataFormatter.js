import React from 'react';
import { format } from 'date-fns';
function DataFormatter({
  originalDate
}) {
  const formattedDate = format(new Date(originalDate), 'd/M/yyyy');
  return /*#__PURE__*/React.createElement(React.Fragment, null, formattedDate);
}
export default DataFormatter;
