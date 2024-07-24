import { TypePhase, useTypedSuperpower } from "../hooks";

import cn from "classnames";

type Props = {
  typedText: string[];
  prefixText: string;
};

export const TypeWriter = ({ typedText, prefixText }: Props) => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(typedText);

  return (
    <div
      className="flex flex-col lg:block text-center  tracking-tight  "
      onClick={resume}
    >
      <span className="text-lg font-Montreal font-normal text-dimGray">
        {prefixText}
      </span>
      <span
        className={cn("text-lg font-Montreal font-normal text-dimGray", {
          ["end-cursor"]: phase !== TypePhase.Deleting,
          ["blinking"]: phase === TypePhase.Pausing,
        })}
        aria-label={selectedSuperpower}
      >
        {typedSuperpower}
      </span>
    </div>
  );
};
