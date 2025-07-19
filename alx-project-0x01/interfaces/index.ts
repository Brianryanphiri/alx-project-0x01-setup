// Your existing UserProps interface
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

// PostData and PostModalProps (unchanged)
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
  initialData?: PostData | null;
}

// Use UserProps for the modal interface to match the checker exactly
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
  initialData?: UserProps | null;
}
