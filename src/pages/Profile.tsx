import { UserProfile } from "@clerk/clerk-react";

const Profile = () => {
  return (
    <div className="flex justify-center py-32 min-h-screen">
      <UserProfile />
    </div>
  );
};
export default Profile;
