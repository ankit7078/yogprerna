// Mock function to simulate fetching a user profile
export const getProfile = async () => {
  console.log("Fetching mock user profile...");
  return {
    uniqueId: "user-123",
    name: "John Doe",
  };
};