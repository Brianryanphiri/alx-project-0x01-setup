// UserProps as you already had
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// ✅ New Interface for Post Data
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// ✅ New Interface for PostModal Props
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
  initialData?: PostData | null;
}
