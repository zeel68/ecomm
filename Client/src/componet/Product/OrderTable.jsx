import React from 'react';
import Pprop from './Pprop';

const OrderTable = () => {
  return (
    <div className="p-[15px] sm:p-6 max-w-screen-xl mx-auto shadow-md">
      <div className="bg-white rounded-md p-[15px]">
        <p className="text-lg font-semibold mb-4">Recent Order</p>
        <hr className='text-[#ddddda] py-[5px]' />
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="border-b border-[#ddddda] font-medium text-[#232321CC]">
              <tr>
                <th></th>
                <th className="p-[15px]">Product</th>
                <th className="p-[15px]">Order Id</th>
                <th className="p-[15px]">Date</th>
                <th className="p-[15px]">Customer Name</th>
                <th className="p-[15px]">Status</th>
                <th className="p-[15px]">Amount</th>
              </tr>
            </thead>
            <tbody>
              <Pprop product="Lorem Ipsum" orderId="#25426" date="Nov 8th,2023" name="Kavin" img="/img1.jpg" status="Delivered" amount="₹200.00" />
              <Pprop product="Lorem Ipsum" orderId="#25425" date="Nov 7th,2023" name="Komael" img="/img2.jpg" status="Canceled" amount="₹400.00" />
              <Pprop product="Lorem Ipsum" orderId="#25424" date="Nov 6th,2023" name="Nikhil" img="/img3.jpg" status="Delivered" amount="₹600.00" />
              <Pprop product="Lorem Ipsum" orderId="#25423" date="Nov 5th,2023" name="Shivam" img="/img4.jpg" status="Canceled" amount="₹450.00" />
              <Pprop product="Lorem Ipsum" orderId="#25422" date="Nov 4th,2023" name="Shadab" img="/img5.jpg" status="Delivered" amount="₹260.00" />
              <Pprop product="Lorem Ipsum" orderId="#25421" date="Nov 3th,2023" name="Yogesh" img="/img6.jpg" status="Canceled" amount="₹780.00" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;

