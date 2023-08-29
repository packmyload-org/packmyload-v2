export default function AppToast({
  heading,
  body,
}: {
  heading: React.ReactNode;
  body: React.ReactNode;
}) {
 return (
   <div className="">
      <h1 className="mb-[4px] font-bold text-[#101828]">{heading}</h1>
      <p className="text-gray-600">{body}</p>
   </div>
  );
}