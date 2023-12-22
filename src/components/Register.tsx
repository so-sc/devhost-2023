import Link from "next/link";
import Image from "next/image";

const Register = () => {
  return (
    <Link
      href="https://forms.gle/eup7oCeG6rKaZ3cH8"
      target="_blank"
      className="flex font-nebulaR text-xl md:text-2xl text-white"
    >
      {"Register"}
      <div className="flex hover:space-x-1 transition-all duration-300 justify-center mx-1 items-center">
        <Image src="/after.svg" alt="." width={25} height={25}></Image>
        <Image src="/after.svg" alt="." width={25} height={25}></Image>
        <Image src="/after.svg" alt="." width={25} height={25}></Image>
      </div>
    </Link>
  );
};

export default Register;
