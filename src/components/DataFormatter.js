import React from 'react';
import { format } from 'date-fns';

function DataFormatter({ originalDate }) {
  const formattedDate = format(new Date(originalDate), 'd/M/yyyy');

  return <>{formattedDate}</>;
}

export default DataFormatter;