import { supabase } from './supabaseConfig'; // Import the Supabase client instance

const Logout = () => {
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      console.log('User logged out');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="logout-container"> 
      <button className="logout-btn" onClick={handleLogout}>Logout</button> 
    </div>
  );
};

export default Logout;
