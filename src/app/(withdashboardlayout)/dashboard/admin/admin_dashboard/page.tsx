import UsersPage from "../users/page";
import ProfileInfo from "./components/ProfileInfo";

const AdminDashboard = () => {
  return (
    <div className="mt-8">
      <ProfileInfo />
      <div>
        <div></div>
        <div>
          <UsersPage />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
