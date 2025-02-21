"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function ModelTemperatureSlider() {
  const [value, setValue] = React.useState([3]);

  // change label to represent the "creatvity" of a model, will be used to adjust the temperature of the model:
  const labels = ["Super low", "Low", "Medium", "High", "Super high"];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6">Code style (aka temperature)</Label>
        <span className="text-sm font-medium">{labels[value[0] - 1]}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl">😒</span>
        <Slider
          value={value}
          onValueChange={setValue}
          min={1}
          max={5}
          aria-label="aka model temperature"
        />
        <span className="text-2xl">🤓</span>
      </div>
    </div>
  );
}
