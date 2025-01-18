import React from 'react';

export async function generateStaticParams() {
  const ids = ['1', '2', '3', '4', '5', '6'];

  return ids.map((id) => ({
    id,
  }));
}

const FormReservation = () => {
  return <div>FormReservation</div>;
};

export default FormReservation;
