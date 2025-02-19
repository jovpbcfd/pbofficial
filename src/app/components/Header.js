import NavMenu from "./NavMenu";



export function Header() {
    	return (
        <header>
          <div className="wrapper">
            <nav>
              <NavMenu />
              <div className="nav-btns">
                <a href="#" className="btn orange" target="_blank">
                  Login
                </a>
                <a href="#" className="btn ghost" target="_blank">
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        </header>
      )
}