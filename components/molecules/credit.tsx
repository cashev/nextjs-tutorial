import Label from "../atoms/label";
import VercelIcon from "./vercel-icon";

const Credit: React.FC = () => {
  return (
    <div className="flex items-center text-sm text-white dark:text-black">
      <Label tagName="span" className="text-black dark:text-white" text="Created by" />
      <a rel="noopener noreferrer" href="https://vercel.com" aria-label="Vercel.com Link" target="_blank" className="text-black dark:text-white">
        <VercelIcon />
      </a>
    </div>
  )
};

export default Credit;
