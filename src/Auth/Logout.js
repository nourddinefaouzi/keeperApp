import { supabase } from './supabaseConfig'; // Import the Supabase client instance

const Logout = () => {
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      console.log('User logged out');
      // Handle successful logout (e.g., redirect to login page)
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="logout-container"> {/* Apply a container class */}
      <button className="logout-btn" onClick={handleLogout}>Logout</button> {/* Apply a button class */}
    </div>
  );
};

export default Logout;
