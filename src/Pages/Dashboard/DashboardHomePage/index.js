import './style.scss';
import {
  LandingStart,
  ChefsTrendingCuisines,
  WeeklyFoodPlan,
} from 'src/Components';

export default function DashboardHomePage() {

  return (
    <div className="dashboard-page">
      <LandingStart />
      <ChefsTrendingCuisines />
      <WeeklyFoodPlan />
    </div>
  );
}
