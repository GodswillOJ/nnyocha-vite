import React from "react";

export default function SocialIcon({ Icon, href = "#" }) {
  return (
    <a
      href={href}
      className="
        w-9 h-9
        rounded-full
        border border-gray-300
        flex items-center justify-center
        text-gray-600
        hover:text-[#e76f00]
        hover:border-[#e76f00]
        transition
      "
    >
      <Icon size={14} />
    </a>
  );
}
