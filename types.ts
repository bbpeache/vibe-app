export interface User {
  uid: string;
  email: string | null;
  username: string;
  avatar: string;
  bio?: string;
  university?: string;
  department?: string;
  themeColor?: string; // Hex color code
  verified?: boolean;
  goldBadge?: boolean;
  postCount?: number;
}

export interface Post {
  id: string;
  uid: string;
  username: string;
  content: string;
  likes: number;
  timestamp: any;
  verified?: boolean;
  goldBadge?: boolean;
  userUniversity?: string;
  userDepartment?: string;
  signature?: string;
  image?: string; // Base64 or URL
  commentCount?: number;
}

export interface Comment {
  id: string;
  uid: string;
  username: string;
  avatar: string;
  text: string;
  timestamp: any;
}

export interface Story {
  id: string;
  uid: string;
  username: string;
  avatar: string; // User avatar for header
  image?: string; // Story image
  text?: string;
  color?: string; // Background gradient
  timestamp: any;
  viewed?: boolean;
}

export interface Notification {
  id: string;
  type: 'post' | 'story' | 'like' | 'follow';
  uid: string; // Who triggered it
  username: string;
  avatar: string;
  message: string;
  timestamp: any;
  read: boolean;
}

export interface ChatMessage {
  id: string;
  uid: string;
  username: string;
  text: string;
  timestamp: any;
  replyTo?: {
    id: string;
    username: string;
    text: string;
  };
}