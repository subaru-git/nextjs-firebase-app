import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../firebase/client";

export const updateUser = (
  id: string,
  data: Partial<Omit<User, "id" | "createdAt">>
): Promise<void> => {
  const ref = doc(db, `users/${id}`);
  return updateDoc(ref, data);
};
