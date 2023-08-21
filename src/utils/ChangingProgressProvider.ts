import React, { useState, useEffect } from "react";

interface IChangingProgressProvider {
    interval: number,
    values: number[],
    children: (value: any) => React.ReactNode;
}

const ChangingProgressProvider = ({ interval, values, children }: IChangingProgressProvider) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValuesIndex(1); // Update the valuesIndex to the desired index
    }, interval);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [interval]);

  return children(values[valuesIndex]);
};

export default ChangingProgressProvider;