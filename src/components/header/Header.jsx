import UserLogin from "../user-login/UserLogin";
import "./Header.css";

function Header() {
	return (
		<header className= "header">
			<h1 className= "title-header">Awesome Kanban Board</h1>
			<div className= "sprint"><UserLogin /></div>
			
		</header>
	);
}

export default Header;