import Header from "../components/Header";
import Move from "../components/Move";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-[414px] h-[736px] relative overflow-hidden bg-white">
        <div className="w-[414px] h-[896px] absolute left-[-1px] top-[-1px] bg-[#d6d7ef]" />
        <Link href="home">
          <Header />
        </Link>
        <div className="w-[414px] h-[736px] absolute overflow-hidden">
          <div className="w-[391px] h-[349.84px] flex-none">{children}</div>
          <Link href="analysis">
            <Move />
          </Link>
        </div>
      </div>
    </>
  );
}
