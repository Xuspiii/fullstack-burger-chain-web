import React from "react";

export function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />{" "}
      <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />{" "}
      <path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />{" "}
    </svg>
  );
}

export default function AddToCartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={24}
      height={24}
      strokeWidth={2}
    >
      {" "}
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>{" "}
      <path d="M12.5 17h-6.5v-14h-2"></path>{" "}
      <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>{" "}
      <path d="M16 19h6"></path> <path d="M19 16v6"></path>{" "}
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path d="M5 12l14 0" /> <path d="M15 16l4 -4" /> <path d="M15 8l4 4" />{" "}
    </svg>
  );
}
