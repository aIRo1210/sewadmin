import { useState, useEffect } from 'react';
import { ref, get, child } from 'firebase/database';
import { auth, database } from './firebaseConfig'; // Adjust the path if necessary

const useFirebaseData = (courseDataPath: string) => {
  const [courseData, setCourseData] = useState<any>(null);
  const [paymentStatus, setPaymentStatus] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // const user = auth.currentUser;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const dbRef = ref(database);

        // Fetch Course Data
        if (courseDataPath) {
          const courseSnapshot = await get(child(dbRef, courseDataPath));
          if (courseSnapshot.exists()) {
            const data = courseSnapshot.val();
            const sortedData = Object.entries(data).sort(([key1], [key2]) => {
              return key1.localeCompare(key2); // Sort alphabetically or apply custom sorting
            });
            setCourseData(Object.fromEntries(sortedData));
          } else {
            setError('No course data available at the provided path');
          }
        } else {
          setError('Course data path is invalid');
        }

        // Fetch Payment Status using auth.currentUser
        // if (user) {
        //   const userPaymentStatus = user.PaymentStatus;
        //   if (userPaymentStatus !== undefined) {
        //     setPaymentStatus(userPaymentStatus);
        //   } else {
        //     setError('Payment status not found');
        //   }
        // } else {
        //   setError('No user is currently signed in');
        // }

      } catch (err) {
        console.error('Error fetching data from Firebase:', err);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Trigger data fetching

  }, [courseDataPath]); // Only refetch data if the course data path changes

  return { courseData, paymentStatus, loading, error };
};

export default useFirebaseData;
