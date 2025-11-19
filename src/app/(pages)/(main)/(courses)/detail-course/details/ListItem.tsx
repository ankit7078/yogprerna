import { Check, X } from "lucide-react";

const ListItem = ({ text, type }) => (
  <li className="flex items-start gap-2">
    {type === "include" ? (
      <Check className="text-green-500 mt-1" size={16} />
    ) : (
      <X className="text-red-500 mt-1" size={16} />
    )}
    <span>{text}</span>
  </li>
);

export default ListItem;
