import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import LandingGuide from "./layout/LandingGuide";
import NavLayout from "./layout/NavLayout";
import { Timer, Chart, AllStudies, MyStudy, More } from "./page";
import CharactorList from "./page/CharactorList";
import MakeDday from "./page/chart/MakeDday";
import Login from "./page/login";
import SignIn from "./page/login/SignIn";
import License from "./page/more/License";
import Notice from "./page/more/Notice";
import Personal from "./page/more/Personal";
import Service from "./page/more/Service";

const Router = () => {
<<<<<<< HEAD
	return (
		<Routes>
			{/* NOTE LandingGuide = 랜딩 분기점 (추후에 로그인/게스트 분기점) */}
			<Route path="/" element={<LandingGuide />}>
				{/* NOTE DefaultLayout = 하단에 Navigation 붙어있는 layout component */}
				<Route element={<DefaultLayout />}>
					<Route path="login" element={<Login />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="makedday" element={<MakeDday />} />
				</Route>
				<Route element={<NavLayout />}>
					<Route path="timer" element={<Timer />} index />;
					<Route path="chart" element={<Chart />} />
					<Route path="allstudies" element={<AllStudies />} />;
					<Route path="mystudy" element={<MyStudy />} />;
					<Route path="more" element={<More />} />;
				</Route>
				<Route path="more/notice" element={<Notice />} />
				<Route path="more/service" element={<Service />} />
				<Route path="more/personal" element={<Personal />} />
				<Route path="more/license" element={<License />} />
			</Route>
		</Routes>
	);
=======
  return (
    <Routes>
      {/* NOTE LandingGuide = 랜딩 분기점 (추후에 로그인/게스트 분기점) */}
      <Route path="/" element={<LandingGuide />}>
        {/* NOTE DefaultLayout = 하단에 Navigation 붙어있는 layout component */}
        <Route element={<DefaultLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="makedday" element={<MakeDday />} />
          <Route path="charactor" element={<CharactorList />} />
        </Route>
        <Route element={<NavLayout />}>
          <Route path="timer" element={<Timer />} index />;
          <Route path="chart" element={<Chart />} />
          <Route path="allstudies" element={<AllStudies />} />;
          <Route path="mystudy" element={<MyStudy />} />;
          <Route path="more" element={<More />} />;
        </Route>
      </Route>
    </Routes>
  );
>>>>>>> feature/chart_dailyChart
};

export default Router;
