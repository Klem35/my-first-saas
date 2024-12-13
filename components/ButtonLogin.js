import Link from "next/link";

const ButtonLogin = ({isLoggedIn, name, extraStyle, children}) => {


  if (isLoggedIn) {
    return <Link href="/dashboard" className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}>Welcome back {name} {children}</Link>

  }
    return <button>Login {children}</button>

};

export default ButtonLogin;