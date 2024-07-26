import { Outlet } from "react-router-dom";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";

export function Root(){

	return (
		<>
			<Header/>
			<div className="container">
				<Outlet/>
			</div>
			<Footer/>
		</>
	)
}