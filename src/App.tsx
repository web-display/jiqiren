import logo from './assets/images/logo.svg'
import style from './App.module.css'
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";

function App() {
	return (
    <div className={style.app}>
      <div className={style.robotList}>
				{robots.map((r) => (
					<Robot key={r.id} id={r.id} name={r.name} email={r.email} />
				))}
      </div>
			
		</div>
	)
}

export default App;
