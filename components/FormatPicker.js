import React from "react";
import { useRadioGroupState } from "@react-stately/radio";
import { useRadioGroup, useRadio } from "@react-aria/radio";

let RadioContext = React.createContext();
function RadioGroup(props) {
  let { children, label } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps} {...props}>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

function Radio(props) {
  let { children, description } = props;
  let state = React.useContext(RadioContext);
  let { inputProps } = useRadio(props, state);
  let selected = state.selectedValue == props.value;

  return (
    <label className={`inline-flex overflow-hidden space-x-2.5 items-start justify-start px-4 py-5 w-full ${selected ? "bg-blue-50" : "bg-white"} `}>
      <input className="form-radio" {...inputProps} />
      <div className="inline-flex flex-col space-y-1.5 items-start justify-start">
        <p className={`font-medium leading-none ${selected ? "text-blue-800" : "text-cool-gray-600"} `}>{children}</p>
        <p className={`leading-none ${selected ? "text-blue-500" : "text-cool-gray-400"}`}>{description}</p>
      </div>
    </label>
  );
}

const FormatPicker = () => {
  return (
    <RadioGroup className="flex flex-col items-start justify-start w-full overflow-hidden border border-blue-100 divide-y divide-blue-100 rounded-md">
      <Radio defaultChecked description="With the .mp3 extension from the MPEG codec" value="mp3">
        MP3 file format
      </Radio>
      <Radio description="With the .wav extension, made by IBM and Microsoft" value="wav">
        WAV file format
      </Radio>
      <Radio description="With the .aac extension for Advanced Audio Coding" value="aac">
        AAC file format
      </Radio>
    </RadioGroup>
  );
};

export default FormatPicker;
