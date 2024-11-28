import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';

const COLLECTION_NAME = 'listings';

export const createListing = async (listingData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), listingData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const searchListings = async (searchParams) => {
  try {
    let q = collection(db, COLLECTION_NAME);

    if (searchParams.location) {
      q = query(q, where("location", "==", searchParams.location));
    }
    // Add more query parameters as needed

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error searching documents: ", error);
    throw error;
  }
};

export const updateListing = async (id, updateData) => {
  try {
    const listingRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(listingRef, updateData);
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

export const deleteListing = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};
