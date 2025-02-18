import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const TicketBarcode = ({ orderNumber }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, orderNumber, {
        format: "CODE128",
        displayValue: false,
        fontSize: 14,
        width: 2,
        height: 50,
      });
    }
  }, [orderNumber]);

  return (
    <div className="flex flex-col justify-center items-center pb-3">
      <svg ref={barcodeRef}></svg>
      <h1 className="text-[12px]">Scan your barcode at the enrty gate</h1>
    </div>
  );
};

export default TicketBarcode;
