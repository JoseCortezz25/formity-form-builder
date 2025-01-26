import { GripVertical } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export const FieldEditor = () => {
  return (
    <div className="field-editor">
      <div className="field-editor--drag">
        <GripVertical size={20} className="text-neutral-600 cursor-grab" />
      </div>
      <div className="field-editor--config">

        <div className="grid gap-2">
          <Label htmlFor="label">Label</Label>
          <Input id="label" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="placeholder">Placeholder</Label>
          <Input
            id="placeholder"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="required"
          />
          <Label htmlFor="required">Required</Label>
        </div>

      </div>
    </div>
  );
};
