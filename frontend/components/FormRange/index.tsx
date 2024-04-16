import FormRow from "@components/FormRow";

import { StyledFormRange, StyledFormRangeOptions } from "./styles";
import { useLayoutEffect, useState } from "react";

interface IFormRangerops {
  id: string;
  min: number;
  max: number;
  label: string;
  options?: string[];
}

const FormRange = ({ id, min, max, label, options }: IFormRangerops) => {
  const thumbsize = 5;
  const [avg, setAvg] = useState((min + max) / 2);
  const [minVal, setMinVal] = useState(avg);
  const [maxVal, setMaxVal] = useState(avg);

  const width = 600;
  const minWidth =
    thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
  const minPercent = ((minVal - min) / (avg - min)) * 100;
  const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
  const styles = {
    min: {
      width: minWidth,
      left: 0,
      "--minRangePercent": `${minPercent}%`,
    },
    max: {
      width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
      left: minWidth,
      "--maxRangePercent": `${maxPercent}%`,
    },
  };

  useLayoutEffect(() => {
    setAvg((maxVal + minVal) / 2);
  }, [minVal, maxVal]);

  return (
    <FormRow>
      <span>{label}</span>
      <StyledFormRange>
        <input
          name={`${id}-min`}
          type="range"
          min={min}
          max={avg}
          step="1"
          value={minVal}
          style={styles.min}
          onChange={({ target }) => setMinVal(Number(target.value))}
        />
        <input
          name={`${id}-max`}
          type="range"
          min={avg}
          max={max}
          step="1"
          value={maxVal}
          style={styles.max}
          onChange={({ target }) => setMaxVal(Number(target.value))}
        />
      </StyledFormRange>

      {options && (
        <StyledFormRangeOptions>
          {options.map((option, index) => {
            return <div key={`option-${index}`}>{option}</div>;
          })}{" "}
        </StyledFormRangeOptions>
      )}
    </FormRow>
  );
};

export default FormRange;
