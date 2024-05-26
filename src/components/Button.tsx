type ButtonProps = {
  href: string;
  target?: string;
  text: string;
  extraStyles?: string;
};

export default function Button(props: ButtonProps) {
  return (
    <a href={props.href} target={props.target || "_self"}>
      <button
        type="button"
        className={`flex items-center justify-center font-semibold border-2 bg-white rounded-full px-3 py-2 gap-x-2 hover:bg-gray-200 transition-colors duration-300 ease-in-out overflow-hidden h-14 text-gh-red-600 border-gh-red-600 ${props.extraStyles}`}
      >
        {props.text}
      </button>
    </a>
  );
}
