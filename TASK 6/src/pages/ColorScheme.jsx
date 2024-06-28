import { useMemo } from "react";
import PropTypes from "prop-types";

const ColorScheme = ({ className = "", success, hEX00AC56, propMinWidth }) => {
  const colorSchemeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[105px] text-left text-lg text-grayscale-900 font-medium-regular ${className}`}
      style={colorSchemeStyle}
    >
      <div className="self-stretch h-20 relative bg-alerts-succes" />
      <div className="flex flex-col items-start justify-start gap-[2px]">
        <div className="relative tracking-[0.01em] leading-[26px] font-semibold inline-block min-w-[77px]">
          {success}
        </div>
        <div className="relative text-sm tracking-[0.01em] leading-[20px] text-grayscale-200 inline-block min-w-[102px]">
          {hEX00AC56}
        </div>
      </div>
    </div>
  );
};

ColorScheme.propTypes = {
  className: PropTypes.string,
  success: PropTypes.string,
  hEX00AC56: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default ColorScheme;