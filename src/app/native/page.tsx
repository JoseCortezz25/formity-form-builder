"use client";

import { Search } from "@/components/search";
import { useState } from "react";
import {
  Text,
  Type,
  CalendarDays,
  CheckSquare,
  ListFilter,
  Radio,
  Send,
  Layout,
  Tag
} from "lucide-react";
import { FieldEditor } from "@/components/field-editor";

interface FormElement {
  icon: React.ElementType;
  name: string;
  category: string;
}

const formElements: FormElement[] = [
  { icon: Type, name: "Short Text", category: "Text Elements" },
  { icon: Text, name: "Paragraph", category: "Text Elements" },
  { icon: CheckSquare, name: "Checkbox", category: "Selection Elements" },
  { icon: Radio, name: "Radio Group", category: "Selection Elements" },
  { icon: ListFilter, name: "Select", category: "Selection Elements" },
  { icon: Send, name: "Submit", category: "Button Elements" },
  { icon: CalendarDays, name: "Date Picker", category: "Date & Time" },
  { icon: Layout, name: "Container", category: "Layout Elements" },
  { icon: Tag, name: "Label", category: "Layout Elements" }
];

const ElementButton = ({ icon: Icon, name }: { icon: React.ElementType, name: string }) => (
  <button className="item-element flex items-center gap-2 p-3 border rounded-lg hover:bg-slate-100">
    <Icon size={24} />
    {name}
  </button>
);

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredElements = formElements.filter(element =>
    element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedElements = filteredElements.reduce((acc, element) => {
    if (!acc[element.category]) {
      acc[element.category] = [];
    }
    acc[element.category].push(element);
    return acc;
  }, {} as Record<string, FormElement[]>);

  return (
    <main className="container mx-auto flex gap-9 justify-between py-9">
      <section className="w-[60%] flex justify-center">
        <div className="draggable-form">
          {/* asdsa */}
          <FieldEditor />
        </div>
      </section>

      <section className="editor-bar w-[27%] space-y-6">
        <Search onSearch={setSearchTerm} />

        {Object.entries(groupedElements).map(([category, elements]) => (
          <div key={category} className="group-elements">
            <h2 className="text-lg font-semibold mb-3">{category}</h2>
            <div className="group-elements--items grid grid-cols-2 gap-3">
              {elements.map((element) => (
                <ElementButton
                  key={element.name}
                  icon={element.icon}
                  name={element.name}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Page;