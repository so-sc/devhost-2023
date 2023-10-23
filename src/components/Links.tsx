import { FC } from "react";
import Link from "next/link";
interface LinkProps {
  href: string;
  text: string;
  target: string;
}

const Links: FC<LinkProps> = ({ href, text, target }) => {
  return (
    <div className="pt-2">
      <Link
        className="hover:underline underline-offset-8"
        href={href}
        target={target}
      >
        {text}
      </Link>
    </div>
  );
};

export default Links;
