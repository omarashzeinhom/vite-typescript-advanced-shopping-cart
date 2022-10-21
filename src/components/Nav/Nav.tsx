export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a className="brand" href="/">
          <img
            src="https://res.cloudinary.com/du9aympvd/image/upload/v1666387382/code/typescript/vite/vite-typescript-computer-shop/logo/ANDGOLOGO_l8f6nw.webp"
            style={{ borderRadius: "90%" }}
            alt="LOGO"
            width="100%"
            height={30}
          />
        </a>

        {/*>>>> TABS START <<<<*/}
        <div className="tabs">
          <a className="active" href="/">
            Home
          </a>
          <a href="/">Shop</a>
        </div>
        {/*>>>> TABS END <<<<*/}

        <div className="nav-right">
          <a className="brand">🛒</a>
        </div>
      </div>
    </nav>
  );
}
