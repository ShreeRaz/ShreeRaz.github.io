import Link from "next/link";

function Header() {
  const navitems = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Home" },
    { name: "Service", href: "#Service" },
  ];
  return (
    <>
      <div className="container p-6 flex justify-center border">
        <div className="w-150 flex flex-header  glass  ">
          {navitems.map((items) => (
            <Link key={items.name} href={items.href}>
              {items.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default Header;
