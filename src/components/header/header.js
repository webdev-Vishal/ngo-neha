import logo from '../../logo-transparent.png';
import './header.scss';
function Header() {
	return (
		<header>
			<div class="container">
				<div class="row">
					<div class="col-2 col_logo">
						<img src={logo}  alt=""/>
					</div>
					<div class="col-10 col_menu my-auto">
						<ul>
							<li><a href="">Home</a></li>
							<li><a href="">About</a></li>
							<li><a href="">Be A Volunteer</a></li>
							<li><a href="">Events</a></li>
							<li ><a href="">Career</a></li>
							<li class="btn"><a href="">Login</a></li>
							<li class="btn"><a href="">Signup</a></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
